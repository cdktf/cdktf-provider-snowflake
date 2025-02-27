# `secretWithBasicAuthentication` Submodule <a name="`secretWithBasicAuthentication` Submodule" id="@cdktf/provider-snowflake.secretWithBasicAuthentication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithBasicAuthentication <a name="SecretWithBasicAuthentication" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication snowflake_secret_with_basic_authentication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

new secretWithBasicAuthentication.SecretWithBasicAuthentication(scope: Construct, id: string, config: SecretWithBasicAuthenticationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig">SecretWithBasicAuthenticationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig">SecretWithBasicAuthenticationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithBasicAuthentication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretWithBasicAuthentication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretWithBasicAuthentication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretWithBasicAuthentication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithBasicAuthentication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList">SecretWithBasicAuthenticationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList">SecretWithBasicAuthenticationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.describeOutput"></a>

```typescript
public readonly describeOutput: SecretWithBasicAuthenticationDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList">SecretWithBasicAuthenticationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.showOutput"></a>

```typescript
public readonly showOutput: SecretWithBasicAuthenticationShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList">SecretWithBasicAuthenticationShowOutputList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithBasicAuthenticationConfig <a name="SecretWithBasicAuthenticationConfig" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

const secretWithBasicAuthenticationConfig: secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.name">name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.password">password</a></code> | <code>string</code> | Specifies the password value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.username">username</a></code> | <code>string</code> | Specifies the username value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#database SecretWithBasicAuthentication#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#name SecretWithBasicAuthentication#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password value to store in the secret.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#password SecretWithBasicAuthentication#password}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#schema SecretWithBasicAuthentication#schema}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username value to store in the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#username SecretWithBasicAuthentication#username}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#comment SecretWithBasicAuthentication#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecretWithBasicAuthenticationDescribeOutput <a name="SecretWithBasicAuthenticationDescribeOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

const secretWithBasicAuthenticationDescribeOutput: secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput = { ... }
```


### SecretWithBasicAuthenticationShowOutput <a name="SecretWithBasicAuthenticationShowOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

const secretWithBasicAuthenticationShowOutput: secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### SecretWithBasicAuthenticationDescribeOutputList <a name="SecretWithBasicAuthenticationDescribeOutputList" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

new secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get"></a>

```typescript
public get(index: number): SecretWithBasicAuthenticationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretWithBasicAuthenticationDescribeOutputOutputReference <a name="SecretWithBasicAuthenticationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

new secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">oauthAccessTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput">SecretWithBasicAuthenticationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthAccessTokenExpiryTime`<sup>Required</sup> <a name="oauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```typescript
public readonly oauthAccessTokenExpiryTime: string;
```

- *Type:* string

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```typescript
public readonly oauthRefreshTokenExpiryTime: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretWithBasicAuthenticationDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput">SecretWithBasicAuthenticationDescribeOutput</a>

---


### SecretWithBasicAuthenticationShowOutputList <a name="SecretWithBasicAuthenticationShowOutputList" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

new secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get"></a>

```typescript
public get(index: number): SecretWithBasicAuthenticationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretWithBasicAuthenticationShowOutputOutputReference <a name="SecretWithBasicAuthenticationShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer"></a>

```typescript
import { secretWithBasicAuthentication } from '@cdktf/provider-snowflake'

new secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput">SecretWithBasicAuthenticationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretWithBasicAuthenticationShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput">SecretWithBasicAuthenticationShowOutput</a>

---



