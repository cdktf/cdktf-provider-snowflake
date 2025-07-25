# `accountPasswordPolicyAttachment` Submodule <a name="`accountPasswordPolicyAttachment` Submodule" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPasswordPolicyAttachment <a name="AccountPasswordPolicyAttachment" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment snowflake_account_password_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

new accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment(scope: Construct, id: string, config: AccountPasswordPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig">AccountPasswordPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig">AccountPasswordPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: AccountPasswordPolicyAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountPasswordPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isConstruct"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformElement"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformResource"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountPasswordPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountPasswordPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountPasswordPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountPasswordPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference">AccountPasswordPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: AccountPasswordPolicyAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference">AccountPasswordPolicyAttachmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccountPasswordPolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPasswordPolicyAttachmentConfig <a name="AccountPasswordPolicyAttachmentConfig" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.Initializer"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

const accountPasswordPolicyAttachmentConfig: accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Qualified name (`"db"."schema"."policy_name"`) of the password policy to apply to the current account. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#id AccountPasswordPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Qualified name (`"db"."schema"."policy_name"`) of the password policy to apply to the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#password_policy AccountPasswordPolicyAttachment#password_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#id AccountPasswordPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccountPasswordPolicyAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#timeouts AccountPasswordPolicyAttachment#timeouts}

---

### AccountPasswordPolicyAttachmentTimeouts <a name="AccountPasswordPolicyAttachmentTimeouts" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.Initializer"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

const accountPasswordPolicyAttachmentTimeouts: accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#create AccountPasswordPolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#delete AccountPasswordPolicyAttachment#delete}. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#read AccountPasswordPolicyAttachment#read}. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#update AccountPasswordPolicyAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#create AccountPasswordPolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#delete AccountPasswordPolicyAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#read AccountPasswordPolicyAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account_password_policy_attachment#update AccountPasswordPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountPasswordPolicyAttachmentTimeoutsOutputReference <a name="AccountPasswordPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { accountPasswordPolicyAttachment } from '@cdktf/provider-snowflake'

new accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountPasswordPolicyAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.accountPasswordPolicyAttachment.AccountPasswordPolicyAttachmentTimeouts">AccountPasswordPolicyAttachmentTimeouts</a>

---



