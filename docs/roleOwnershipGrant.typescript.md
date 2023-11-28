# `roleOwnershipGrant` Submodule <a name="`roleOwnershipGrant` Submodule" id="@cdktf/provider-snowflake.roleOwnershipGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleOwnershipGrant <a name="RoleOwnershipGrant" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant snowflake_role_ownership_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

new roleOwnershipGrant.RoleOwnershipGrant(scope: Construct, id: string, config: RoleOwnershipGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig">RoleOwnershipGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig">RoleOwnershipGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants">resetCurrentGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName">resetRevertOwnershipToRoleName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCurrentGrants` <a name="resetCurrentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants"></a>

```typescript
public resetCurrentGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRevertOwnershipToRoleName` <a name="resetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName"></a>

```typescript
public resetRevertOwnershipToRoleName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RoleOwnershipGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

roleOwnershipGrant.RoleOwnershipGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RoleOwnershipGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RoleOwnershipGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RoleOwnershipGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RoleOwnershipGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput">currentGrantsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput">onRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput">revertOwnershipToRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput">toRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants">currentGrants</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName">onRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName">toRoleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentGrantsInput`<sup>Optional</sup> <a name="currentGrantsInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput"></a>

```typescript
public readonly currentGrantsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onRoleNameInput`<sup>Optional</sup> <a name="onRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput"></a>

```typescript
public readonly onRoleNameInput: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="revertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput"></a>

```typescript
public readonly revertOwnershipToRoleNameInput: string;
```

- *Type:* string

---

##### `toRoleNameInput`<sup>Optional</sup> <a name="toRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput"></a>

```typescript
public readonly toRoleNameInput: string;
```

- *Type:* string

---

##### `currentGrants`<sup>Required</sup> <a name="currentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants"></a>

```typescript
public readonly currentGrants: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onRoleName`<sup>Required</sup> <a name="onRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName"></a>

```typescript
public readonly onRoleName: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleName`<sup>Required</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

---

##### `toRoleName`<sup>Required</sup> <a name="toRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName"></a>

```typescript
public readonly toRoleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RoleOwnershipGrantConfig <a name="RoleOwnershipGrantConfig" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.Initializer"></a>

```typescript
import { roleOwnershipGrant } from '@cdktf/provider-snowflake'

const roleOwnershipGrantConfig: roleOwnershipGrant.RoleOwnershipGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName">onRoleName</a></code> | <code>string</code> | The name of the role ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName">toRoleName</a></code> | <code>string</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants">currentGrants</a></code> | <code>string</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | The name of the role to revert ownership to on destroy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onRoleName`<sup>Required</sup> <a name="onRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName"></a>

```typescript
public readonly onRoleName: string;
```

- *Type:* string

The name of the role ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}

---

##### `toRoleName`<sup>Required</sup> <a name="toRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName"></a>

```typescript
public readonly toRoleName: string;
```

- *Type:* string

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}

---

##### `currentGrants`<sup>Optional</sup> <a name="currentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants"></a>

```typescript
public readonly currentGrants: string;
```

- *Type:* string

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#revert_ownership_to_role_name RoleOwnershipGrant#revert_ownership_to_role_name}

---



