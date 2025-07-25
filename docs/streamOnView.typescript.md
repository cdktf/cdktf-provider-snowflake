# `streamOnView` Submodule <a name="`streamOnView` Submodule" id="@cdktf/provider-snowflake.streamOnView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnView <a name="StreamOnView" id="@cdktf/provider-snowflake.streamOnView.StreamOnView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view snowflake_stream_on_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnView(scope: Construct, id: string, config: StreamOnViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig">StreamOnViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt">putAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore">putBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly">resetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt">resetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants">resetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows">resetShowInitialRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAt` <a name="putAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt"></a>

```typescript
public putAt(value: StreamOnViewAt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putAt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `putBefore` <a name="putBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore"></a>

```typescript
public putBefore(value: StreamOnViewBefore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putBefore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamOnViewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

---

##### `resetAppendOnly` <a name="resetAppendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAppendOnly"></a>

```typescript
public resetAppendOnly(): void
```

##### `resetAt` <a name="resetAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetAt"></a>

```typescript
public resetAt(): void
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetBefore"></a>

```typescript
public resetBefore(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCopyGrants` <a name="resetCopyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetCopyGrants"></a>

```typescript
public resetCopyGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShowInitialRows` <a name="resetShowInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetShowInitialRows"></a>

```typescript
public resetShowInitialRows(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

streamOnView.StreamOnView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

streamOnView.StreamOnView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

streamOnView.StreamOnView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

streamOnView.StreamOnView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamOnView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamOnView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamOnView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamOnView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at">at</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before">before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference">StreamOnViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput">appendOnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput">atInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput">beforeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput">copyGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput">showInitialRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly">appendOnly</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows">showInitialRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.at"></a>

```typescript
public readonly at: StreamOnViewAtOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference">StreamOnViewAtOutputReference</a>

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.before"></a>

```typescript
public readonly before: StreamOnViewBeforeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference">StreamOnViewBeforeOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.describeOutput"></a>

```typescript
public readonly describeOutput: StreamOnViewDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList">StreamOnViewDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showOutput"></a>

```typescript
public readonly showOutput: StreamOnViewShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList">StreamOnViewShowOutputList</a>

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnViewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference">StreamOnViewTimeoutsOutputReference</a>

---

##### `appendOnlyInput`<sup>Optional</sup> <a name="appendOnlyInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnlyInput"></a>

```typescript
public readonly appendOnlyInput: string;
```

- *Type:* string

---

##### `atInput`<sup>Optional</sup> <a name="atInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.atInput"></a>

```typescript
public readonly atInput: StreamOnViewAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.beforeInput"></a>

```typescript
public readonly beforeInput: StreamOnViewBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `copyGrantsInput`<sup>Optional</sup> <a name="copyGrantsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrantsInput"></a>

```typescript
public readonly copyGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `showInitialRowsInput`<sup>Optional</sup> <a name="showInitialRowsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRowsInput"></a>

```typescript
public readonly showInitialRowsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamOnViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.appendOnly"></a>

```typescript
public readonly appendOnly: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `copyGrants`<sup>Required</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `showInitialRows`<sup>Required</sup> <a name="showInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.showInitialRows"></a>

```typescript
public readonly showInitialRows: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnViewAt <a name="StreamOnViewAt" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewAt: streamOnView.StreamOnViewAt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAt.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewBefore <a name="StreamOnViewBefore" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewBefore: streamOnView.StreamOnViewBefore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#offset StreamOnView#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#statement StreamOnView#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#stream StreamOnView#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#timestamp StreamOnView#timestamp}

---

### StreamOnViewConfig <a name="StreamOnViewConfig" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewConfig: streamOnView.StreamOnViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view">view</a></code> | <code>string</code> | Specifies an identifier for the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly">appendOnly</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an append-only stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at">at</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | at block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before">before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | before block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#id StreamOnView#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows">showInitialRows</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#database StreamOnView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#name StreamOnView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#schema StreamOnView#schema}

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Specifies an identifier for the view the stream will monitor.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#view StreamOnView#view}

---

##### `appendOnly`<sup>Optional</sup> <a name="appendOnly" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.appendOnly"></a>

```typescript
public readonly appendOnly: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an append-only stream.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#append_only StreamOnView#append_only}

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.at"></a>

```typescript
public readonly at: StreamOnViewAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#at StreamOnView#at}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.before"></a>

```typescript
public readonly before: StreamOnViewBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

before block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#before StreamOnView#before}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#comment StreamOnView#comment}

---

##### `copyGrants`<sup>Optional</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#copy_grants StreamOnView#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#id StreamOnView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `showInitialRows`<sup>Optional</sup> <a name="showInitialRows" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.showInitialRows"></a>

```typescript
public readonly showInitialRows: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#show_initial_rows StreamOnView#show_initial_rows}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnViewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#timeouts StreamOnView#timeouts}

---

### StreamOnViewDescribeOutput <a name="StreamOnViewDescribeOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewDescribeOutput: streamOnView.StreamOnViewDescribeOutput = { ... }
```


### StreamOnViewShowOutput <a name="StreamOnViewShowOutput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewShowOutput: streamOnView.StreamOnViewShowOutput = { ... }
```


### StreamOnViewTimeouts <a name="StreamOnViewTimeouts" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

const streamOnViewTimeouts: streamOnView.StreamOnViewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#create StreamOnView#create}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#delete StreamOnView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#read StreamOnView#read}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#update StreamOnView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#create StreamOnView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#delete StreamOnView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#read StreamOnView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/stream_on_view#update StreamOnView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamOnViewAtOutputReference <a name="StreamOnViewAtOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnViewAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewAt">StreamOnViewAt</a>

---


### StreamOnViewBeforeOutputReference <a name="StreamOnViewBeforeOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewBeforeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewBeforeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnViewBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewBefore">StreamOnViewBefore</a>

---


### StreamOnViewDescribeOutputList <a name="StreamOnViewDescribeOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get"></a>

```typescript
public get(index: number): StreamOnViewDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnViewDescribeOutputOutputReference <a name="StreamOnViewDescribeOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnViewDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewDescribeOutput">StreamOnViewDescribeOutput</a>

---


### StreamOnViewShowOutputList <a name="StreamOnViewShowOutputList" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get"></a>

```typescript
public get(index: number): StreamOnViewShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnViewShowOutputOutputReference <a name="StreamOnViewShowOutputOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnViewShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewShowOutput">StreamOnViewShowOutput</a>

---


### StreamOnViewTimeoutsOutputReference <a name="StreamOnViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamOnView } from '@cdktf/provider-snowflake'

new streamOnView.StreamOnViewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamOnViewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.streamOnView.StreamOnViewTimeouts">StreamOnViewTimeouts</a>

---



