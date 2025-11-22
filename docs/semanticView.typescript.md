# `semanticView` Submodule <a name="`semanticView` Submodule" id="@cdktf/provider-snowflake.semanticView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SemanticView <a name="SemanticView" id="@cdktf/provider-snowflake.semanticView.SemanticView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticView(scope: Construct, id: string, config: SemanticViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig">SemanticViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig">SemanticViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putFacts">putFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships">putRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts">resetFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships">resetRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | SemanticViewDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]

---

##### `putFacts` <a name="putFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts"></a>

```typescript
public putFacts(value: IResolvable | SemanticViewFacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics"></a>

```typescript
public putMetrics(value: IResolvable | SemanticViewMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]

---

##### `putRelationships` <a name="putRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships"></a>

```typescript
public putRelationships(value: IResolvable | SemanticViewRelationships[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]

---

##### `putTables` <a name="putTables" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables"></a>

```typescript
public putTables(value: IResolvable | SemanticViewTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts"></a>

```typescript
public putTimeouts(value: SemanticViewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetFacts` <a name="resetFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts"></a>

```typescript
public resetFacts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

##### `resetRelationships` <a name="resetRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships"></a>

```typescript
public resetRelationships(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

semanticView.SemanticView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

semanticView.SemanticView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

semanticView.SemanticView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

semanticView.SemanticView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SemanticView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SemanticView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SemanticView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.facts">facts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships">relationships</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput">factsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput">metricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput">relationshipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput">tablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions"></a>

```typescript
public readonly dimensions: SemanticViewDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a>

---

##### `facts`<sup>Required</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.facts"></a>

```typescript
public readonly facts: SemanticViewFactsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics"></a>

```typescript
public readonly metrics: SemanticViewMetricsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a>

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships"></a>

```typescript
public readonly relationships: SemanticViewRelationshipsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput"></a>

```typescript
public readonly showOutput: SemanticViewShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tables"></a>

```typescript
public readonly tables: SemanticViewTablesList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts"></a>

```typescript
public readonly timeouts: SemanticViewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | SemanticViewDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]

---

##### `factsInput`<sup>Optional</sup> <a name="factsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput"></a>

```typescript
public readonly factsInput: IResolvable | SemanticViewFacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput"></a>

```typescript
public readonly metricsInput: IResolvable | SemanticViewMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relationshipsInput`<sup>Optional</sup> <a name="relationshipsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput"></a>

```typescript
public readonly relationshipsInput: IResolvable | SemanticViewRelationships[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput"></a>

```typescript
public readonly tablesInput: IResolvable | SemanticViewTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SemanticViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SemanticViewConfig <a name="SemanticViewConfig" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewConfig: semanticView.SemanticViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables">tables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]</code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts">facts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]</code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics">metrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]</code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships">relationships</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]</code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables"></a>

```typescript
public readonly tables: IResolvable | SemanticViewTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | SemanticViewDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `facts`<sup>Optional</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts"></a>

```typescript
public readonly facts: IResolvable | SemanticViewFacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics"></a>

```typescript
public readonly metrics: IResolvable | SemanticViewMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `relationships`<sup>Optional</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships"></a>

```typescript
public readonly relationships: IResolvable | SemanticViewRelationships[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SemanticViewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

### SemanticViewDimensions <a name="SemanticViewDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewDimensions: semanticView.SemanticViewDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression used to compute the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym">synonym</a></code> | <code>string[]</code> | List of synonyms for the dimension. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression used to compute the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

List of synonyms for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewFacts <a name="SemanticViewFacts" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewFacts: semanticView.SemanticViewFacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression used to compute the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym">synonym</a></code> | <code>string[]</code> | List of synonyms for the fact. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression used to compute the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

List of synonyms for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetrics <a name="SemanticViewMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewMetrics: semanticView.SemanticViewMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression">semanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | semantic_expression block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction">windowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | window_function block. |

---

##### `semanticExpression`<sup>Optional</sup> <a name="semanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression"></a>

```typescript
public readonly semanticExpression: SemanticViewMetricsSemanticExpression;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

semantic_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#semantic_expression SemanticView#semantic_expression}

---

##### `windowFunction`<sup>Optional</sup> <a name="windowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction"></a>

```typescript
public readonly windowFunction: SemanticViewMetricsWindowFunction;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

window_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_function SemanticView#window_function}

---

### SemanticViewMetricsSemanticExpression <a name="SemanticViewMetricsSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewMetricsSemanticExpression: semanticView.SemanticViewMetricsSemanticExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression used to compute the metric. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the semantic expression. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym">synonym</a></code> | <code>string[]</code> | List of synonyms for this semantic expression. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression used to compute the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

List of synonyms for this semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetricsWindowFunction <a name="SemanticViewMetricsWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewMetricsWindowFunction: semanticView.SemanticViewMetricsWindowFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause">overClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | over_clause block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression used to compute the metric following the `<window_function>(<metric>)` format. |

---

##### `overClause`<sup>Required</sup> <a name="overClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause"></a>

```typescript
public readonly overClause: SemanticViewMetricsWindowFunctionOverClause;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

over_clause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

### SemanticViewMetricsWindowFunctionOverClause <a name="SemanticViewMetricsWindowFunctionOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewMetricsWindowFunctionOverClause: semanticView.SemanticViewMetricsWindowFunctionOverClause = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy">orderBy</a></code> | <code>string</code> | Specifies an order by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy">partitionBy</a></code> | <code>string</code> | Specifies a partition by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause">windowFrameClause</a></code> | <code>string</code> | Specifies a window frame clause. |

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

Specifies an order by clause.

It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}

---

##### `partitionBy`<sup>Optional</sup> <a name="partitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy"></a>

```typescript
public readonly partitionBy: string;
```

- *Type:* string

Specifies a partition by clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}

---

##### `windowFrameClause`<sup>Optional</sup> <a name="windowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause"></a>

```typescript
public readonly windowFrameClause: string;
```

- *Type:* string

Specifies a window frame clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}

---

### SemanticViewRelationships <a name="SemanticViewRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewRelationships: semanticView.SemanticViewRelationships = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias">referencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | referenced_table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns">relationshipColumns</a></code> | <code>string[]</code> | Specifies one or more columns in the first logical table that refers to columns in another logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias">tableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns">referencedRelationshipColumns</a></code> | <code>string[]</code> | Specifies one or more columns in the second logical table that are referred to by the first logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier">relationshipIdentifier</a></code> | <code>string</code> | Specifies an optional identifier for the relationship. |

---

##### `referencedTableNameOrAlias`<sup>Required</sup> <a name="referencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias"></a>

```typescript
public readonly referencedTableNameOrAlias: SemanticViewRelationshipsReferencedTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

referenced_table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_table_name_or_alias SemanticView#referenced_table_name_or_alias}

---

##### `relationshipColumns`<sup>Required</sup> <a name="relationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns"></a>

```typescript
public readonly relationshipColumns: string[];
```

- *Type:* string[]

Specifies one or more columns in the first logical table that refers to columns in another logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_columns SemanticView#relationship_columns}

---

##### `tableNameOrAlias`<sup>Required</sup> <a name="tableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias"></a>

```typescript
public readonly tableNameOrAlias: SemanticViewRelationshipsTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name_or_alias SemanticView#table_name_or_alias}

---

##### `referencedRelationshipColumns`<sup>Optional</sup> <a name="referencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns"></a>

```typescript
public readonly referencedRelationshipColumns: string[];
```

- *Type:* string[]

Specifies one or more columns in the second logical table that are referred to by the first logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_relationship_columns SemanticView#referenced_relationship_columns}

---

##### `relationshipIdentifier`<sup>Optional</sup> <a name="relationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier"></a>

```typescript
public readonly relationshipIdentifier: string;
```

- *Type:* string

Specifies an optional identifier for the relationship.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_identifier SemanticView#relationship_identifier}

---

### SemanticViewRelationshipsReferencedTableNameOrAlias <a name="SemanticViewRelationshipsReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewRelationshipsReferencedTableNameOrAlias: semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias">tableAlias</a></code> | <code>string</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName">tableName</a></code> | <code>string</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `tableAlias`<sup>Optional</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewRelationshipsTableNameOrAlias <a name="SemanticViewRelationshipsTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewRelationshipsTableNameOrAlias: semanticView.SemanticViewRelationshipsTableNameOrAlias = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias">tableAlias</a></code> | <code>string</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName">tableName</a></code> | <code>string</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `tableAlias`<sup>Optional</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewShowOutput <a name="SemanticViewShowOutput" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewShowOutput: semanticView.SemanticViewShowOutput = { ... }
```


### SemanticViewTables <a name="SemanticViewTables" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewTables: semanticView.SemanticViewTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias">tableAlias</a></code> | <code>string</code> | Specifies an alias for a logical table in the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName">tableName</a></code> | <code>string</code> | Specifies an identifier for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey">primaryKey</a></code> | <code>string[]</code> | Definitions of primary keys in the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym">synonym</a></code> | <code>string[]</code> | List of synonyms for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique">unique</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]</code> | unique block. |

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

Specifies an alias for a logical table in the semantic view.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Specifies an identifier for the logical table.

Example: `"\"<db_name>\".\"<schema_name>\".\"<table_name>\""`. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey"></a>

```typescript
public readonly primaryKey: string[];
```

- *Type:* string[]

Definitions of primary keys in the logical table.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#primary_key SemanticView#primary_key}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

List of synonyms for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique"></a>

```typescript
public readonly unique: IResolvable | SemanticViewTablesUnique[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]

unique block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#unique SemanticView#unique}

---

### SemanticViewTablesUnique <a name="SemanticViewTablesUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewTablesUnique: semanticView.SemanticViewTablesUnique = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values">values</a></code> | <code>string[]</code> | Unique key combinations in the logical table. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Unique key combinations in the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#values SemanticView#values}

---

### SemanticViewTimeouts <a name="SemanticViewTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

const semanticViewTimeouts: semanticView.SemanticViewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SemanticViewDimensionsList <a name="SemanticViewDimensionsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get"></a>

```typescript
public get(index: number): SemanticViewDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>[]

---


### SemanticViewDimensionsOutputReference <a name="SemanticViewDimensionsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym"></a>

```typescript
public resetSynonym(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput">synonymInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym">synonym</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput"></a>

```typescript
public readonly qualifiedExpressionNameInput: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput"></a>

```typescript
public readonly synonymInput: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>

---


### SemanticViewFactsList <a name="SemanticViewFactsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewFactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get"></a>

```typescript
public get(index: number): SemanticViewFactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewFacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>[]

---


### SemanticViewFactsOutputReference <a name="SemanticViewFactsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewFactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym"></a>

```typescript
public resetSynonym(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput">synonymInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym">synonym</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput"></a>

```typescript
public readonly qualifiedExpressionNameInput: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput"></a>

```typescript
public readonly synonymInput: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewFacts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>

---


### SemanticViewMetricsList <a name="SemanticViewMetricsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get"></a>

```typescript
public get(index: number): SemanticViewMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>[]

---


### SemanticViewMetricsOutputReference <a name="SemanticViewMetricsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression">putSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction">putWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression">resetSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction">resetWindowFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSemanticExpression` <a name="putSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression"></a>

```typescript
public putSemanticExpression(value: SemanticViewMetricsSemanticExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `putWindowFunction` <a name="putWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction"></a>

```typescript
public putWindowFunction(value: SemanticViewMetricsWindowFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `resetSemanticExpression` <a name="resetSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression"></a>

```typescript
public resetSemanticExpression(): void
```

##### `resetWindowFunction` <a name="resetWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction"></a>

```typescript
public resetWindowFunction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression">semanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction">windowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput">semanticExpressionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput">windowFunctionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `semanticExpression`<sup>Required</sup> <a name="semanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression"></a>

```typescript
public readonly semanticExpression: SemanticViewMetricsSemanticExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a>

---

##### `windowFunction`<sup>Required</sup> <a name="windowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction"></a>

```typescript
public readonly windowFunction: SemanticViewMetricsWindowFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a>

---

##### `semanticExpressionInput`<sup>Optional</sup> <a name="semanticExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput"></a>

```typescript
public readonly semanticExpressionInput: SemanticViewMetricsSemanticExpression;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `windowFunctionInput`<sup>Optional</sup> <a name="windowFunctionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput"></a>

```typescript
public readonly windowFunctionInput: SemanticViewMetricsWindowFunction;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>

---


### SemanticViewMetricsSemanticExpressionOutputReference <a name="SemanticViewMetricsSemanticExpressionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewMetricsSemanticExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym"></a>

```typescript
public resetSynonym(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput">synonymInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym">synonym</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput"></a>

```typescript
public readonly qualifiedExpressionNameInput: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput"></a>

```typescript
public readonly synonymInput: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewMetricsSemanticExpression;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---


### SemanticViewMetricsWindowFunctionOutputReference <a name="SemanticViewMetricsWindowFunctionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewMetricsWindowFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause">putOverClause</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverClause` <a name="putOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause"></a>

```typescript
public putOverClause(value: SemanticViewMetricsWindowFunctionOverClause): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause">overClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput">overClauseInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overClause`<sup>Required</sup> <a name="overClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause"></a>

```typescript
public readonly overClause: SemanticViewMetricsWindowFunctionOverClauseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a>

---

##### `overClauseInput`<sup>Optional</sup> <a name="overClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput"></a>

```typescript
public readonly overClauseInput: SemanticViewMetricsWindowFunctionOverClause;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput"></a>

```typescript
public readonly qualifiedExpressionNameInput: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName"></a>

```typescript
public readonly qualifiedExpressionName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewMetricsWindowFunction;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---


### SemanticViewMetricsWindowFunctionOverClauseOutputReference <a name="SemanticViewMetricsWindowFunctionOverClauseOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy">resetPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause">resetWindowFrameClause</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetPartitionBy` <a name="resetPartitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy"></a>

```typescript
public resetPartitionBy(): void
```

##### `resetWindowFrameClause` <a name="resetWindowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause"></a>

```typescript
public resetWindowFrameClause(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput">partitionByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput">windowFrameClauseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy">partitionBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause">windowFrameClause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `partitionByInput`<sup>Optional</sup> <a name="partitionByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput"></a>

```typescript
public readonly partitionByInput: string;
```

- *Type:* string

---

##### `windowFrameClauseInput`<sup>Optional</sup> <a name="windowFrameClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput"></a>

```typescript
public readonly windowFrameClauseInput: string;
```

- *Type:* string

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `partitionBy`<sup>Required</sup> <a name="partitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy"></a>

```typescript
public readonly partitionBy: string;
```

- *Type:* string

---

##### `windowFrameClause`<sup>Required</sup> <a name="windowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause"></a>

```typescript
public readonly windowFrameClause: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewMetricsWindowFunctionOverClause;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


### SemanticViewRelationshipsList <a name="SemanticViewRelationshipsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewRelationshipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get"></a>

```typescript
public get(index: number): SemanticViewRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewRelationships[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>[]

---


### SemanticViewRelationshipsOutputReference <a name="SemanticViewRelationshipsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewRelationshipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias">putReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias">putTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns">resetReferencedRelationshipColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier">resetRelationshipIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferencedTableNameOrAlias` <a name="putReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias"></a>

```typescript
public putReferencedTableNameOrAlias(value: SemanticViewRelationshipsReferencedTableNameOrAlias): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `putTableNameOrAlias` <a name="putTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias"></a>

```typescript
public putTableNameOrAlias(value: SemanticViewRelationshipsTableNameOrAlias): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `resetReferencedRelationshipColumns` <a name="resetReferencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns"></a>

```typescript
public resetReferencedRelationshipColumns(): void
```

##### `resetRelationshipIdentifier` <a name="resetRelationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier"></a>

```typescript
public resetRelationshipIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias">referencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias">tableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput">referencedRelationshipColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput">referencedTableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput">relationshipColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput">relationshipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput">tableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns">referencedRelationshipColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns">relationshipColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier">relationshipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referencedTableNameOrAlias`<sup>Required</sup> <a name="referencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias"></a>

```typescript
public readonly referencedTableNameOrAlias: SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a>

---

##### `tableNameOrAlias`<sup>Required</sup> <a name="tableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias"></a>

```typescript
public readonly tableNameOrAlias: SemanticViewRelationshipsTableNameOrAliasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a>

---

##### `referencedRelationshipColumnsInput`<sup>Optional</sup> <a name="referencedRelationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput"></a>

```typescript
public readonly referencedRelationshipColumnsInput: string[];
```

- *Type:* string[]

---

##### `referencedTableNameOrAliasInput`<sup>Optional</sup> <a name="referencedTableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput"></a>

```typescript
public readonly referencedTableNameOrAliasInput: SemanticViewRelationshipsReferencedTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `relationshipColumnsInput`<sup>Optional</sup> <a name="relationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput"></a>

```typescript
public readonly relationshipColumnsInput: string[];
```

- *Type:* string[]

---

##### `relationshipIdentifierInput`<sup>Optional</sup> <a name="relationshipIdentifierInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput"></a>

```typescript
public readonly relationshipIdentifierInput: string;
```

- *Type:* string

---

##### `tableNameOrAliasInput`<sup>Optional</sup> <a name="tableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput"></a>

```typescript
public readonly tableNameOrAliasInput: SemanticViewRelationshipsTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `referencedRelationshipColumns`<sup>Required</sup> <a name="referencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns"></a>

```typescript
public readonly referencedRelationshipColumns: string[];
```

- *Type:* string[]

---

##### `relationshipColumns`<sup>Required</sup> <a name="relationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns"></a>

```typescript
public readonly relationshipColumns: string[];
```

- *Type:* string[]

---

##### `relationshipIdentifier`<sup>Required</sup> <a name="relationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier"></a>

```typescript
public readonly relationshipIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewRelationships;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>

---


### SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias">resetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableAlias` <a name="resetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias"></a>

```typescript
public resetTableAlias(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias">tableAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```typescript
public readonly tableAliasInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewRelationshipsReferencedTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---


### SemanticViewRelationshipsTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias">resetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableAlias` <a name="resetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias"></a>

```typescript
public resetTableAlias(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias">tableAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```typescript
public readonly tableAliasInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewRelationshipsTableNameOrAlias;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---


### SemanticViewShowOutputList <a name="SemanticViewShowOutputList" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get"></a>

```typescript
public get(index: number): SemanticViewShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SemanticViewShowOutputOutputReference <a name="SemanticViewShowOutputOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SemanticViewShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a>

---


### SemanticViewTablesList <a name="SemanticViewTablesList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get"></a>

```typescript
public get(index: number): SemanticViewTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>[]

---


### SemanticViewTablesOutputReference <a name="SemanticViewTablesOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique">putUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnique` <a name="putUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique"></a>

```typescript
public putUnique(value: IResolvable | SemanticViewTablesUnique[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey(): void
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym"></a>

```typescript
public resetSynonym(): void
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique"></a>

```typescript
public resetUnique(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique">unique</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput">synonymInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput">uniqueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey">primaryKey</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym">synonym</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias">tableAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique"></a>

```typescript
public readonly unique: SemanticViewTablesUniqueList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string[];
```

- *Type:* string[]

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput"></a>

```typescript
public readonly synonymInput: string[];
```

- *Type:* string[]

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput"></a>

```typescript
public readonly tableAliasInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: IResolvable | SemanticViewTablesUnique[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey"></a>

```typescript
public readonly primaryKey: string[];
```

- *Type:* string[]

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym"></a>

```typescript
public readonly synonym: string[];
```

- *Type:* string[]

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias"></a>

```typescript
public readonly tableAlias: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewTables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>

---


### SemanticViewTablesUniqueList <a name="SemanticViewTablesUniqueList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewTablesUniqueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get"></a>

```typescript
public get(index: number): SemanticViewTablesUniqueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewTablesUnique[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>[]

---


### SemanticViewTablesUniqueOutputReference <a name="SemanticViewTablesUniqueOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewTablesUniqueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewTablesUnique;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>

---


### SemanticViewTimeoutsOutputReference <a name="SemanticViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer"></a>

```typescript
import { semanticView } from '@cdktf/provider-snowflake'

new semanticView.SemanticViewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SemanticViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---



