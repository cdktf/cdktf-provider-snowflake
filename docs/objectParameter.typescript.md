# `objectParameter` Submodule <a name="`objectParameter` Submodule" id="@cdktf/provider-snowflake.objectParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectParameter <a name="ObjectParameter" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter snowflake_object_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

new objectParameter.ObjectParameter(scope: Construct, id: string, config: ObjectParameterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig">ObjectParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig">ObjectParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier">putObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount">resetOnAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObjectIdentifier` <a name="putObjectIdentifier" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier"></a>

```typescript
public putObjectIdentifier(value: IResolvable | ObjectParameterObjectIdentifier[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier"></a>

```typescript
public resetObjectIdentifier(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetOnAccount` <a name="resetOnAccount" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount"></a>

```typescript
public resetOnAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectParameter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isConstruct"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

objectParameter.ObjectParameter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

objectParameter.ObjectParameter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

objectParameter.ObjectParameter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

objectParameter.ObjectParameter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier">objectIdentifier</a></code> | <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput">onAccountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.onAccount">onAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: ObjectParameterObjectIdentifierList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput"></a>

```typescript
public readonly objectIdentifierInput: IResolvable | ObjectParameterObjectIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `onAccountInput`<sup>Optional</sup> <a name="onAccountInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput"></a>

```typescript
public readonly onAccountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `onAccount`<sup>Required</sup> <a name="onAccount" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.onAccount"></a>

```typescript
public readonly onAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectParameterConfig <a name="ObjectParameterConfig" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.Initializer"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

const objectParameterConfig: objectParameter.ObjectParameterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.key">key</a></code> | <code>string</code> | Name of object parameter. Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.value">value</a></code> | <code>string</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier">objectIdentifier</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]</code> | object_identifier block. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType">objectType</a></code> | <code>string</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount">onAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the object parameter will be set on the account level. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of object parameter. Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: IResolvable | ObjectParameterObjectIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount"></a>

```typescript
public readonly onAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

### ObjectParameterObjectIdentifier <a name="ObjectParameterObjectIdentifier" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.Initializer"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

const objectParameterObjectIdentifier: objectParameter.ObjectParameterObjectIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name">name</a></code> | <code>string</code> | Name of the object to set the parameter for. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database">database</a></code> | <code>string</code> | Name of the database that the object was created in. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema">schema</a></code> | <code>string</code> | Name of the schema that the object was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the object to set the parameter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#name ObjectParameter#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Name of the database that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#database ObjectParameter#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Name of the schema that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/object_parameter#schema ObjectParameter#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectParameterObjectIdentifierList <a name="ObjectParameterObjectIdentifierList" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

new objectParameter.ObjectParameterObjectIdentifierList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get"></a>

```typescript
public get(index: number): ObjectParameterObjectIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectParameterObjectIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>[]

---


### ObjectParameterObjectIdentifierOutputReference <a name="ObjectParameterObjectIdentifierOutputReference" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer"></a>

```typescript
import { objectParameter } from '@cdktf/provider-snowflake'

new objectParameter.ObjectParameterObjectIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObjectParameterObjectIdentifier;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>

---



