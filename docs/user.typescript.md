# `snowflake_user`

Refer to the Terraform Registory for docs: [`snowflake_user`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-snowflake.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-snowflake.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user snowflake_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultNamespace">resetDefaultNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles">resetDefaultSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultWarehouse">resetDefaultWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLoginName">resetLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetMustChangePassword">resetMustChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey">resetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey2">resetRsaPublicKey2</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.user.User.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.user.User.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.user.User.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.user.User.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefaultNamespace` <a name="resetDefaultNamespace" id="@cdktf/provider-snowflake.user.User.resetDefaultNamespace"></a>

```typescript
public resetDefaultNamespace(): void
```

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktf/provider-snowflake.user.User.resetDefaultRole"></a>

```typescript
public resetDefaultRole(): void
```

##### `resetDefaultSecondaryRoles` <a name="resetDefaultSecondaryRoles" id="@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles"></a>

```typescript
public resetDefaultSecondaryRoles(): void
```

##### `resetDefaultWarehouse` <a name="resetDefaultWarehouse" id="@cdktf/provider-snowflake.user.User.resetDefaultWarehouse"></a>

```typescript
public resetDefaultWarehouse(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-snowflake.user.User.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-snowflake.user.User.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-snowflake.user.User.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-snowflake.user.User.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-snowflake.user.User.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetLoginName` <a name="resetLoginName" id="@cdktf/provider-snowflake.user.User.resetLoginName"></a>

```typescript
public resetLoginName(): void
```

##### `resetMustChangePassword` <a name="resetMustChangePassword" id="@cdktf/provider-snowflake.user.User.resetMustChangePassword"></a>

```typescript
public resetMustChangePassword(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-snowflake.user.User.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRsaPublicKey` <a name="resetRsaPublicKey" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey"></a>

```typescript
public resetRsaPublicKey(): void
```

##### `resetRsaPublicKey2` <a name="resetRsaPublicKey2" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey2"></a>

```typescript
public resetRsaPublicKey2(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

user.User.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.user.User.generateConfigForImport"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

user.User.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey">hasRsaPublicKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput">defaultNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRoleInput">defaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput">defaultSecondaryRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput">defaultWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginNameInput">loginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput">mustChangePasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input">rsaPublicKey2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput">rsaPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespace">defaultNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRole">defaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles">defaultSecondaryRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouse">defaultWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginName">loginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePassword">mustChangePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey">rsaPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hasRsaPublicKey`<sup>Required</sup> <a name="hasRsaPublicKey" id="@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey"></a>

```typescript
public readonly hasRsaPublicKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.user.User.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultNamespaceInput`<sup>Optional</sup> <a name="defaultNamespaceInput" id="@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput"></a>

```typescript
public readonly defaultNamespaceInput: string;
```

- *Type:* string

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktf/provider-snowflake.user.User.property.defaultRoleInput"></a>

```typescript
public readonly defaultRoleInput: string;
```

- *Type:* string

---

##### `defaultSecondaryRolesInput`<sup>Optional</sup> <a name="defaultSecondaryRolesInput" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput"></a>

```typescript
public readonly defaultSecondaryRolesInput: string[];
```

- *Type:* string[]

---

##### `defaultWarehouseInput`<sup>Optional</sup> <a name="defaultWarehouseInput" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput"></a>

```typescript
public readonly defaultWarehouseInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-snowflake.user.User.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-snowflake.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-snowflake.user.User.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-snowflake.user.User.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-snowflake.user.User.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `loginNameInput`<sup>Optional</sup> <a name="loginNameInput" id="@cdktf/provider-snowflake.user.User.property.loginNameInput"></a>

```typescript
public readonly loginNameInput: string;
```

- *Type:* string

---

##### `mustChangePasswordInput`<sup>Optional</sup> <a name="mustChangePasswordInput" id="@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput"></a>

```typescript
public readonly mustChangePasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.user.User.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-snowflake.user.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `rsaPublicKey2Input`<sup>Optional</sup> <a name="rsaPublicKey2Input" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input"></a>

```typescript
public readonly rsaPublicKey2Input: string;
```

- *Type:* string

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="rsaPublicKeyInput" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput"></a>

```typescript
public readonly rsaPublicKeyInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.user.User.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `defaultNamespace`<sup>Required</sup> <a name="defaultNamespace" id="@cdktf/provider-snowflake.user.User.property.defaultNamespace"></a>

```typescript
public readonly defaultNamespace: string;
```

- *Type:* string

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktf/provider-snowflake.user.User.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

---

##### `defaultSecondaryRoles`<sup>Required</sup> <a name="defaultSecondaryRoles" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles"></a>

```typescript
public readonly defaultSecondaryRoles: string[];
```

- *Type:* string[]

---

##### `defaultWarehouse`<sup>Required</sup> <a name="defaultWarehouse" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouse"></a>

```typescript
public readonly defaultWarehouse: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.User.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-snowflake.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.user.User.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-snowflake.user.User.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-snowflake.user.User.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `loginName`<sup>Required</sup> <a name="loginName" id="@cdktf/provider-snowflake.user.User.property.loginName"></a>

```typescript
public readonly loginName: string;
```

- *Type:* string

---

##### `mustChangePassword`<sup>Required</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.user.User.property.mustChangePassword"></a>

```typescript
public readonly mustChangePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.User.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.user.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `rsaPublicKey`<sup>Required</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* string

---

##### `rsaPublicKey2`<sup>Required</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2"></a>

```typescript
public readonly rsaPublicKey2: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-snowflake.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-snowflake'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.name">name</a></code> | <code>string</code> | Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#comment User#comment}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace">defaultNamespace</a></code> | <code>string</code> | Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultRole">defaultRole</a></code> | <code>string</code> | Specifies the role that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles">defaultSecondaryRoles</a></code> | <code>string[]</code> | Specifies the set of secondary roles that are active for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse">defaultWarehouse</a></code> | <code>string</code> | Specifies the virtual warehouse that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#disabled User#disabled}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | Name displayed for the user in the Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.email">email</a></code> | <code>string</code> | Email address for the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.firstName">firstName</a></code> | <code>string</code> | First name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lastName">lastName</a></code> | <code>string</code> | Last name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.loginName">loginName</a></code> | <code>string</code> | The name users use to log in. If not supplied, snowflake will use name instead. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword">mustChangePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.password">password</a></code> | <code>string</code> | **WARNING:** this will put the password in the terraform state file. Use carefully. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey">rsaPublicKey</a></code> | <code>string</code> | Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>string</code> | Specifies the user’s second RSA public key; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.UserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.user.UserConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#comment User#comment}.

---

##### `defaultNamespace`<sup>Optional</sup> <a name="defaultNamespace" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace"></a>

```typescript
public readonly defaultNamespace: string;
```

- *Type:* string

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#default_namespace User#default_namespace}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#default_role User#default_role}

---

##### `defaultSecondaryRoles`<sup>Optional</sup> <a name="defaultSecondaryRoles" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles"></a>

```typescript
public readonly defaultSecondaryRoles: string[];
```

- *Type:* string[]

Specifies the set of secondary roles that are active for the user’s session upon login.

Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#default_secondary_roles User#default_secondary_roles}

---

##### `defaultWarehouse`<sup>Optional</sup> <a name="defaultWarehouse" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse"></a>

```typescript
public readonly defaultWarehouse: string;
```

- *Type:* string

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.UserConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#disabled User#disabled}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-snowflake.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-snowflake.user.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#email User#email}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.user.UserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#first_name User#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.user.UserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#last_name User#last_name}

---

##### `loginName`<sup>Optional</sup> <a name="loginName" id="@cdktf/provider-snowflake.user.UserConfig.property.loginName"></a>

```typescript
public readonly loginName: string;
```

- *Type:* string

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#login_name User#login_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword"></a>

```typescript
public readonly mustChangePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.user.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#password User#password}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* string

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#rsa_public_key User#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2"></a>

```typescript
public readonly rsaPublicKey2: string;
```

- *Type:* string

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}

---



