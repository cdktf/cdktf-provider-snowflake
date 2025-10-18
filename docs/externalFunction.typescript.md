# `externalFunction` Submodule <a name="`externalFunction` Submodule" id="@cdktf/provider-snowflake.externalFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalFunction <a name="ExternalFunction" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function snowflake_external_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunction(scope: Construct, id: string, config: ExternalFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig">ExternalFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg">putArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg">resetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders">resetContextHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows">resetMaxBatchRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator">resetRequestTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator">resetResponseTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed">resetReturnNullAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArg` <a name="putArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg"></a>

```typescript
public putArg(value: IResolvable | ExternalFunctionArg[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ExternalFunctionHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: ExternalFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---

##### `resetArg` <a name="resetArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg"></a>

```typescript
public resetArg(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetContextHeaders` <a name="resetContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders"></a>

```typescript
public resetContextHeaders(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxBatchRows` <a name="resetMaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows"></a>

```typescript
public resetMaxBatchRows(): void
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior"></a>

```typescript
public resetNullInputBehavior(): void
```

##### `resetRequestTranslator` <a name="resetRequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator"></a>

```typescript
public resetRequestTranslator(): void
```

##### `resetResponseTranslator` <a name="resetResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator"></a>

```typescript
public resetResponseTranslator(): void
```

##### `resetReturnNullAllowed` <a name="resetReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed"></a>

```typescript
public resetReturnNullAllowed(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

externalFunction.ExternalFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

externalFunction.ExternalFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

externalFunction.ExternalFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

externalFunction.ExternalFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header">header</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference">ExternalFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput">apiIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput">argInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput">contextHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput">maxBatchRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput">requestTranslatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput">responseTranslatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput">returnBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput">returnNullAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput">returnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput">urlOfProxyAndResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration">apiIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders">contextHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows">maxBatchRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator">requestTranslator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator">responseTranslator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior">returnBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed">returnNullAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource">urlOfProxyAndResource</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg"></a>

```typescript
public readonly arg: ExternalFunctionArgList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header"></a>

```typescript
public readonly header: ExternalFunctionHeaderList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeouts"></a>

```typescript
public readonly timeouts: ExternalFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference">ExternalFunctionTimeoutsOutputReference</a>

---

##### `apiIntegrationInput`<sup>Optional</sup> <a name="apiIntegrationInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput"></a>

```typescript
public readonly apiIntegrationInput: string;
```

- *Type:* string

---

##### `argInput`<sup>Optional</sup> <a name="argInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput"></a>

```typescript
public readonly argInput: IResolvable | ExternalFunctionArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `contextHeadersInput`<sup>Optional</sup> <a name="contextHeadersInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput"></a>

```typescript
public readonly contextHeadersInput: string[];
```

- *Type:* string[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ExternalFunctionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxBatchRowsInput`<sup>Optional</sup> <a name="maxBatchRowsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput"></a>

```typescript
public readonly maxBatchRowsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput"></a>

```typescript
public readonly nullInputBehaviorInput: string;
```

- *Type:* string

---

##### `requestTranslatorInput`<sup>Optional</sup> <a name="requestTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput"></a>

```typescript
public readonly requestTranslatorInput: string;
```

- *Type:* string

---

##### `responseTranslatorInput`<sup>Optional</sup> <a name="responseTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput"></a>

```typescript
public readonly responseTranslatorInput: string;
```

- *Type:* string

---

##### `returnBehaviorInput`<sup>Optional</sup> <a name="returnBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput"></a>

```typescript
public readonly returnBehaviorInput: string;
```

- *Type:* string

---

##### `returnNullAllowedInput`<sup>Optional</sup> <a name="returnNullAllowedInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput"></a>

```typescript
public readonly returnNullAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput"></a>

```typescript
public readonly returnTypeInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExternalFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---

##### `urlOfProxyAndResourceInput`<sup>Optional</sup> <a name="urlOfProxyAndResourceInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

```typescript
public readonly urlOfProxyAndResourceInput: string;
```

- *Type:* string

---

##### `apiIntegration`<sup>Required</sup> <a name="apiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration"></a>

```typescript
public readonly apiIntegration: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `contextHeaders`<sup>Required</sup> <a name="contextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders"></a>

```typescript
public readonly contextHeaders: string[];
```

- *Type:* string[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxBatchRows`<sup>Required</sup> <a name="maxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows"></a>

```typescript
public readonly maxBatchRows: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

---

##### `requestTranslator`<sup>Required</sup> <a name="requestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator"></a>

```typescript
public readonly requestTranslator: string;
```

- *Type:* string

---

##### `responseTranslator`<sup>Required</sup> <a name="responseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator"></a>

```typescript
public readonly responseTranslator: string;
```

- *Type:* string

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior"></a>

```typescript
public readonly returnBehavior: string;
```

- *Type:* string

---

##### `returnNullAllowed`<sup>Required</sup> <a name="returnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed"></a>

```typescript
public readonly returnNullAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="urlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource"></a>

```typescript
public readonly urlOfProxyAndResource: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalFunctionArg <a name="ExternalFunctionArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

const externalFunctionArg: externalFunction.ExternalFunctionArg = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name">name</a></code> | <code>string</code> | Argument name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type">type</a></code> | <code>string</code> | Argument type, e.g. VARCHAR. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="ExternalFunctionConfig" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

const externalFunctionConfig: externalFunction.ExternalFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration">apiIntegration</a></code> | <code>string</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior">returnBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType">returnType</a></code> | <code>string</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource">urlOfProxyAndResource</a></code> | <code>string</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg">arg</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]</code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment">comment</a></code> | <code>string</code> | (Default: `user-defined function`) A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression">compression</a></code> | <code>string</code> | (Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders">contextHeaders</a></code> | <code>string[]</code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows">maxBatchRows</a></code> | <code>number</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | (Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator">requestTranslator</a></code> | <code>string</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator">responseTranslator</a></code> | <code>string</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed">returnNullAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false). |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiIntegration`<sup>Required</sup> <a name="apiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration"></a>

```typescript
public readonly apiIntegration: string;
```

- *Type:* string

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior"></a>

```typescript
public readonly returnBehavior: string;
```

- *Type:* string

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="urlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

```typescript
public readonly urlOfProxyAndResource: string;
```

- *Type:* string

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg"></a>

```typescript
public readonly arg: IResolvable | ExternalFunctionArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Default: `user-defined function`) A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

(Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `contextHeaders`<sup>Optional</sup> <a name="contextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders"></a>

```typescript
public readonly contextHeaders: string[];
```

- *Type:* string[]

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header"></a>

```typescript
public readonly header: IResolvable | ExternalFunctionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxBatchRows`<sup>Optional</sup> <a name="maxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows"></a>

```typescript
public readonly maxBatchRows: number;
```

- *Type:* number

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

(Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `requestTranslator`<sup>Optional</sup> <a name="requestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator"></a>

```typescript
public readonly requestTranslator: string;
```

- *Type:* string

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `responseTranslator`<sup>Optional</sup> <a name="responseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator"></a>

```typescript
public readonly responseTranslator: string;
```

- *Type:* string

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `returnNullAllowed`<sup>Optional</sup> <a name="returnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed"></a>

```typescript
public readonly returnNullAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExternalFunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#timeouts ExternalFunction#timeouts}

---

### ExternalFunctionHeader <a name="ExternalFunctionHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

const externalFunctionHeader: externalFunction.ExternalFunctionHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name">name</a></code> | <code>string</code> | Header name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value">value</a></code> | <code>string</code> | Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#value ExternalFunction#value}

---

### ExternalFunctionTimeouts <a name="ExternalFunctionTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

const externalFunctionTimeouts: externalFunction.ExternalFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#create ExternalFunction#create}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#delete ExternalFunction#delete}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#read ExternalFunction#read}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#update ExternalFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#create ExternalFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#delete ExternalFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#read ExternalFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/external_function#update ExternalFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalFunctionArgList <a name="ExternalFunctionArgList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunctionArgList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get"></a>

```typescript
public get(index: number): ExternalFunctionArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalFunctionArg[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>[]

---


### ExternalFunctionArgOutputReference <a name="ExternalFunctionArgOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunctionArgOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalFunctionArg;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>

---


### ExternalFunctionHeaderList <a name="ExternalFunctionHeaderList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunctionHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get"></a>

```typescript
public get(index: number): ExternalFunctionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalFunctionHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>[]

---


### ExternalFunctionHeaderOutputReference <a name="ExternalFunctionHeaderOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunctionHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalFunctionHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>

---


### ExternalFunctionTimeoutsOutputReference <a name="ExternalFunctionTimeoutsOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { externalFunction } from '@cdktf/provider-snowflake'

new externalFunction.ExternalFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---



