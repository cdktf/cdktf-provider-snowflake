# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-snowflake.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-snowflake.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function snowflake_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

new functionResource.FunctionResource(scope: Construct, id: string, config: FunctionResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig">FunctionResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig">FunctionResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetImports">resetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetPackages">resetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetReturnBehavior">resetReturnBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetTargetPath">resetTargetPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.functionResource.FunctionResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.functionResource.FunctionResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments"></a>

```typescript
public putArguments(value: IResolvable | FunctionResourceArguments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetHandler` <a name="resetHandler" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImports` <a name="resetImports" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetImports"></a>

```typescript
public resetImports(): void
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetIsSecure"></a>

```typescript
public resetIsSecure(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetNullInputBehavior"></a>

```typescript
public resetNullInputBehavior(): void
```

##### `resetPackages` <a name="resetPackages" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetPackages"></a>

```typescript
public resetPackages(): void
```

##### `resetReturnBehavior` <a name="resetReturnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetReturnBehavior"></a>

```typescript
public resetReturnBehavior(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```

##### `resetTargetPath` <a name="resetTargetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetTargetPath"></a>

```typescript
public resetTargetPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

functionResource.FunctionResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

functionResource.FunctionResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

functionResource.FunctionResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

functionResource.FunctionResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList">FunctionResourceArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.argumentsInput">argumentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.importsInput">importsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecureInput">isSecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.packagesInput">packagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehaviorInput">returnBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnTypeInput">returnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPathInput">targetPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.imports">imports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehavior">returnBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPath">targetPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.arguments"></a>

```typescript
public readonly arguments: FunctionResourceArgumentsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList">FunctionResourceArgumentsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: IResolvable | FunctionResourceArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.importsInput"></a>

```typescript
public readonly importsInput: string[];
```

- *Type:* string[]

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecureInput"></a>

```typescript
public readonly isSecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehaviorInput"></a>

```typescript
public readonly nullInputBehaviorInput: string;
```

- *Type:* string

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.packagesInput"></a>

```typescript
public readonly packagesInput: string[];
```

- *Type:* string[]

---

##### `returnBehaviorInput`<sup>Optional</sup> <a name="returnBehaviorInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehaviorInput"></a>

```typescript
public readonly returnBehaviorInput: string;
```

- *Type:* string

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnTypeInput"></a>

```typescript
public readonly returnTypeInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `targetPathInput`<sup>Optional</sup> <a name="targetPathInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPathInput"></a>

```typescript
public readonly targetPathInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.imports"></a>

```typescript
public readonly imports: string[];
```

- *Type:* string[]

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehavior"></a>

```typescript
public readonly returnBehavior: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `targetPath`<sup>Required</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPath"></a>

```typescript
public readonly targetPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArguments <a name="FunctionResourceArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

const functionResourceArguments: functionResource.FunctionResourceArguments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.name">name</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.type">type</a></code> | <code>string</code> | The argument type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#name FunctionResource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#type FunctionResource#type}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

const functionResourceConfig: functionResource.FunctionResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the function; |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnType">returnType</a></code> | <code>string</code> | The return type of the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.statement">statement</a></code> | <code>string</code> | Specifies the javascript / java / scala / sql / python code used to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.arguments">arguments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.handler">handler</a></code> | <code>string</code> | The handler method for Java / Python function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.imports">imports</a></code> | <code>string[]</code> | Imports for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.language">language</a></code> | <code>string</code> | Specifies the language of the stored function code. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.packages">packages</a></code> | <code>string[]</code> | List of package imports to use for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnBehavior">returnBehavior</a></code> | <code>string</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Required for Python functions. Specifies Python runtime version. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.targetPath">targetPath</a></code> | <code>string</code> | The target path for the Java / Python functions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#database FunctionResource#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the function;

does not have to be unique for the schema in which the function is created. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#name FunctionResource#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

The return type of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#return_type FunctionResource#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#schema FunctionResource#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the javascript / java / scala / sql / python code used to create the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#statement FunctionResource#statement}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.arguments"></a>

```typescript
public readonly arguments: IResolvable | FunctionResourceArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#arguments FunctionResource#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#comment FunctionResource#comment}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

The handler method for Java / Python function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#handler FunctionResource#handler}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.imports"></a>

```typescript
public readonly imports: string[];
```

- *Type:* string[]

Imports for Java / Python functions.

For Java this a list of jar files, for Python this is a list of Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#imports FunctionResource#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the function is secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#is_secure FunctionResource#is_secure}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Specifies the language of the stored function code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#language FunctionResource#language}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.nullInputBehavior"></a>

```typescript
public readonly nullInputBehavior: string;
```

- *Type:* string

Specifies the behavior of the function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#null_input_behavior FunctionResource#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

List of package imports to use for Java / Python functions.

For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#packages FunctionResource#packages}

---

##### `returnBehavior`<sup>Optional</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnBehavior"></a>

```typescript
public readonly returnBehavior: string;
```

- *Type:* string

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#return_behavior FunctionResource#return_behavior}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Required for Python functions. Specifies Python runtime version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#runtime_version FunctionResource#runtime_version}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.targetPath"></a>

```typescript
public readonly targetPath: string;
```

- *Type:* string

The target path for the Java / Python functions.

For Java, it is the path of compiled jar files and for the Python it is the path of the Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/function#target_path FunctionResource#target_path}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgumentsList <a name="FunctionResourceArgumentsList" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

new functionResource.FunctionResourceArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get"></a>

```typescript
public get(index: number): FunctionResourceArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionResourceArguments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>[]

---


### FunctionResourceArgumentsOutputReference <a name="FunctionResourceArgumentsOutputReference" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer"></a>

```typescript
import { functionResource } from '@cdktf/provider-snowflake'

new functionResource.FunctionResourceArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionResourceArguments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>

---



