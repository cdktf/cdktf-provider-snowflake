# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktf/provider-snowflake.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume snowflake_external_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolume(scope: Construct, id: string, config: ExternalVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetAllowWrites">resetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation"></a>

```typescript
public putStorageLocation(value: IResolvable | ExternalVolumeStorageLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]

---

##### `resetAllowWrites` <a name="resetAllowWrites" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetAllowWrites"></a>

```typescript
public resetAllowWrites(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isConstruct"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

externalVolume.ExternalVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

externalVolume.ExternalVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

externalVolume.ExternalVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

externalVolume.ExternalVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList">ExternalVolumeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList">ExternalVolumeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList">ExternalVolumeStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.allowWritesInput">allowWritesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.storageLocationInput">storageLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.allowWrites">allowWrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.describeOutput"></a>

```typescript
public readonly describeOutput: ExternalVolumeDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList">ExternalVolumeDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.showOutput"></a>

```typescript
public readonly showOutput: ExternalVolumeShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList">ExternalVolumeShowOutputList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.storageLocation"></a>

```typescript
public readonly storageLocation: ExternalVolumeStorageLocationList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList">ExternalVolumeStorageLocationList</a>

---

##### `allowWritesInput`<sup>Optional</sup> <a name="allowWritesInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.allowWritesInput"></a>

```typescript
public readonly allowWritesInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: IResolvable | ExternalVolumeStorageLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.allowWrites"></a>

```typescript
public readonly allowWrites: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalVolume.ExternalVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

const externalVolumeConfig: externalVolume.ExternalVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.name">name</a></code> | <code>string</code> | Identifier for the external volume; |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.storageLocation">storageLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]</code> | storage_location block. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.allowWrites">allowWrites</a></code> | <code>string</code> | Specifies whether write operations are allowed for the external volume; |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the external volume. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#id ExternalVolume#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the external volume;

must be unique for your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#name ExternalVolume#name}

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: IResolvable | ExternalVolumeStorageLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#storage_location ExternalVolume#storage_location}

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.allowWrites"></a>

```typescript
public readonly allowWrites: string;
```

- *Type:* string

Specifies whether write operations are allowed for the external volume;

must be set to TRUE for Iceberg tables that use Snowflake as the catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#allow_writes ExternalVolume#allow_writes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the external volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#comment ExternalVolume#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ExternalVolumeDescribeOutput <a name="ExternalVolumeDescribeOutput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

const externalVolumeDescribeOutput: externalVolume.ExternalVolumeDescribeOutput = { ... }
```


### ExternalVolumeShowOutput <a name="ExternalVolumeShowOutput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutput.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

const externalVolumeShowOutput: externalVolume.ExternalVolumeShowOutput = { ... }
```


### ExternalVolumeStorageLocation <a name="ExternalVolumeStorageLocation" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

const externalVolumeStorageLocation: externalVolume.ExternalVolumeStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageBaseUrl">storageBaseUrl</a></code> | <code>string</code> | Specifies the base URL for your cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageLocationName">storageLocationName</a></code> | <code>string</code> | Name of the storage location. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageProvider">storageProvider</a></code> | <code>string</code> | Specifies the cloud storage provider that stores your data files. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>string</code> | Specifies the ID for the KMS-managed key used to encrypt files. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionType">encryptionType</a></code> | <code>string</code> | Specifies the encryption type used. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>string</code> | Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageBaseUrl"></a>

```typescript
public readonly storageBaseUrl: string;
```

- *Type:* string

Specifies the base URL for your cloud storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#storage_base_url ExternalVolume#storage_base_url}

---

##### `storageLocationName`<sup>Required</sup> <a name="storageLocationName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageLocationName"></a>

```typescript
public readonly storageLocationName: string;
```

- *Type:* string

Name of the storage location.

Must be unique for the external volume. Do not use the name `terraform_provider_sentinel_storage_location` - this is reserved for the provider for performing update operations. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#storage_location_name ExternalVolume#storage_location_name}

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageProvider"></a>

```typescript
public readonly storageProvider: string;
```

- *Type:* string

Specifies the cloud storage provider that stores your data files.

Valid values are (case-insensitive): `GCS` | `AZURE` | `S3` | `S3GOV`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#storage_provider ExternalVolume#storage_provider}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#azure_tenant_id ExternalVolume#azure_tenant_id}

---

##### `encryptionKmsKeyId`<sup>Optional</sup> <a name="encryptionKmsKeyId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionKmsKeyId"></a>

```typescript
public readonly encryptionKmsKeyId: string;
```

- *Type:* string

Specifies the ID for the KMS-managed key used to encrypt files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#encryption_kms_key_id ExternalVolume#encryption_kms_key_id}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Specifies the encryption type used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#encryption_type ExternalVolume#encryption_type}

---

##### `storageAwsRoleArn`<sup>Optional</sup> <a name="storageAwsRoleArn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsRoleArn"></a>

```typescript
public readonly storageAwsRoleArn: string;
```

- *Type:* string

Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_volume#storage_aws_role_arn ExternalVolume#storage_aws_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeDescribeOutputList <a name="ExternalVolumeDescribeOutputList" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get"></a>

```typescript
public get(index: number): ExternalVolumeDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalVolumeDescribeOutputOutputReference <a name="ExternalVolumeDescribeOutputOutputReference" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput">ExternalVolumeDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalVolumeDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput">ExternalVolumeDescribeOutput</a>

---


### ExternalVolumeShowOutputList <a name="ExternalVolumeShowOutputList" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get"></a>

```typescript
public get(index: number): ExternalVolumeShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalVolumeShowOutputOutputReference <a name="ExternalVolumeShowOutputOutputReference" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.allowWrites">allowWrites</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutput">ExternalVolumeShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.allowWrites"></a>

```typescript
public readonly allowWrites: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalVolumeShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeShowOutput">ExternalVolumeShowOutput</a>

---


### ExternalVolumeStorageLocationList <a name="ExternalVolumeStorageLocationList" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeStorageLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get"></a>

```typescript
public get(index: number): ExternalVolumeStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalVolumeStorageLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>[]

---


### ExternalVolumeStorageLocationOutputReference <a name="ExternalVolumeStorageLocationOutputReference" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer"></a>

```typescript
import { externalVolume } from '@cdktf/provider-snowflake'

new externalVolume.ExternalVolumeStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionKmsKeyId">resetEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsRoleArn">resetStorageAwsRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetEncryptionKmsKeyId` <a name="resetEncryptionKmsKeyId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionKmsKeyId"></a>

```typescript
public resetEncryptionKmsKeyId(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetStorageAwsRoleArn` <a name="resetStorageAwsRoleArn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsRoleArn"></a>

```typescript
public resetStorageAwsRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyIdInput">encryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArnInput">storageAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrlInput">storageBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationNameInput">storageLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProviderInput">storageProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrl">storageBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationName">storageLocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProvider">storageProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="storageAwsExternalId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalId"></a>

```typescript
public readonly storageAwsExternalId: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `encryptionKmsKeyIdInput`<sup>Optional</sup> <a name="encryptionKmsKeyIdInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyIdInput"></a>

```typescript
public readonly encryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `storageAwsRoleArnInput`<sup>Optional</sup> <a name="storageAwsRoleArnInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArnInput"></a>

```typescript
public readonly storageAwsRoleArnInput: string;
```

- *Type:* string

---

##### `storageBaseUrlInput`<sup>Optional</sup> <a name="storageBaseUrlInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrlInput"></a>

```typescript
public readonly storageBaseUrlInput: string;
```

- *Type:* string

---

##### `storageLocationNameInput`<sup>Optional</sup> <a name="storageLocationNameInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationNameInput"></a>

```typescript
public readonly storageLocationNameInput: string;
```

- *Type:* string

---

##### `storageProviderInput`<sup>Optional</sup> <a name="storageProviderInput" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProviderInput"></a>

```typescript
public readonly storageProviderInput: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```typescript
public readonly encryptionKmsKeyId: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="storageAwsRoleArn" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArn"></a>

```typescript
public readonly storageAwsRoleArn: string;
```

- *Type:* string

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrl"></a>

```typescript
public readonly storageBaseUrl: string;
```

- *Type:* string

---

##### `storageLocationName`<sup>Required</sup> <a name="storageLocationName" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationName"></a>

```typescript
public readonly storageLocationName: string;
```

- *Type:* string

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProvider"></a>

```typescript
public readonly storageProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalVolumeStorageLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>

---



