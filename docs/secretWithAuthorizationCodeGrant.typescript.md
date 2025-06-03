# `secretWithAuthorizationCodeGrant` Submodule <a name="`secretWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithAuthorizationCodeGrant <a name="SecretWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant(scope: Construct, id: string, config: SecretWithAuthorizationCodeGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig">SecretWithAuthorizationCodeGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts"></a>

```typescript
public putTimeouts(value: SecretWithAuthorizationCodeGrantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretWithAuthorizationCodeGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput">oauthRefreshTokenExpiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput">oauthRefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication">apiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput"></a>

```typescript
public readonly describeOutput: SecretWithAuthorizationCodeGrantDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput"></a>

```typescript
public readonly showOutput: SecretWithAuthorizationCodeGrantShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeouts"></a>

```typescript
public readonly timeouts: SecretWithAuthorizationCodeGrantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference">SecretWithAuthorizationCodeGrantTimeoutsOutputReference</a>

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput"></a>

```typescript
public readonly apiAuthenticationInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenExpiryTimeInput`<sup>Optional</sup> <a name="oauthRefreshTokenExpiryTimeInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput"></a>

```typescript
public readonly oauthRefreshTokenExpiryTimeInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenInput`<sup>Optional</sup> <a name="oauthRefreshTokenInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput"></a>

```typescript
public readonly oauthRefreshTokenInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecretWithAuthorizationCodeGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthRefreshToken`<sup>Required</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken"></a>

```typescript
public readonly oauthRefreshToken: string;
```

- *Type:* string

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime"></a>

```typescript
public readonly oauthRefreshTokenExpiryTime: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithAuthorizationCodeGrantConfig <a name="SecretWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const secretWithAuthorizationCodeGrantConfig: secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication">apiAuthentication</a></code> | <code>string</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name">name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>string</code> | Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>string</code> | Specifies the timestamp as a string when the OAuth refresh token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: string;
```

- *Type:* string

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}

---

##### `oauthRefreshToken`<sup>Required</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken"></a>

```typescript
public readonly oauthRefreshToken: string;
```

- *Type:* string

Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime"></a>

```typescript
public readonly oauthRefreshTokenExpiryTime: string;
```

- *Type:* string

Specifies the timestamp as a string when the OAuth refresh token expires.

Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecretWithAuthorizationCodeGrantTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#timeouts SecretWithAuthorizationCodeGrant#timeouts}

---

### SecretWithAuthorizationCodeGrantDescribeOutput <a name="SecretWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const secretWithAuthorizationCodeGrantDescribeOutput: secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput = { ... }
```


### SecretWithAuthorizationCodeGrantShowOutput <a name="SecretWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const secretWithAuthorizationCodeGrantShowOutput: secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput = { ... }
```


### SecretWithAuthorizationCodeGrantTimeouts <a name="SecretWithAuthorizationCodeGrantTimeouts" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const secretWithAuthorizationCodeGrantTimeouts: secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretWithAuthorizationCodeGrantDescribeOutputList <a name="SecretWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```typescript
public get(index: number): SecretWithAuthorizationCodeGrantDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="SecretWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">oauthAccessTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthAccessTokenExpiryTime`<sup>Required</sup> <a name="oauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```typescript
public readonly oauthAccessTokenExpiryTime: string;
```

- *Type:* string

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```typescript
public readonly oauthRefreshTokenExpiryTime: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretWithAuthorizationCodeGrantDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a>

---


### SecretWithAuthorizationCodeGrantShowOutputList <a name="SecretWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get"></a>

```typescript
public get(index: number): SecretWithAuthorizationCodeGrantShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretWithAuthorizationCodeGrantShowOutputOutputReference <a name="SecretWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretWithAuthorizationCodeGrantShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a>

---


### SecretWithAuthorizationCodeGrantTimeoutsOutputReference <a name="SecretWithAuthorizationCodeGrantTimeoutsOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer"></a>

```typescript
import { secretWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretWithAuthorizationCodeGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantTimeouts">SecretWithAuthorizationCodeGrantTimeouts</a>

---



