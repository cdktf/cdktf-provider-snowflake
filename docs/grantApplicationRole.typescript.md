# `grantApplicationRole` Submodule <a name="`grantApplicationRole` Submodule" id="@cdktf/provider-snowflake.grantApplicationRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantApplicationRole <a name="GrantApplicationRole" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role snowflake_grant_application_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

new grantApplicationRole.GrantApplicationRole(scope: Construct, id: string, config: GrantApplicationRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig">GrantApplicationRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig">GrantApplicationRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetParentAccountRoleName">resetParentAccountRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.putTimeouts"></a>

```typescript
public putTimeouts(value: GrantApplicationRoleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a>

---

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetApplicationName"></a>

```typescript
public resetApplicationName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentAccountRoleName` <a name="resetParentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetParentAccountRoleName"></a>

```typescript
public resetParentAccountRoleName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantApplicationRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

grantApplicationRole.GrantApplicationRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

grantApplicationRole.GrantApplicationRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

grantApplicationRole.GrantApplicationRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

grantApplicationRole.GrantApplicationRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GrantApplicationRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantApplicationRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantApplicationRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantApplicationRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference">GrantApplicationRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleNameInput">applicationRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleNameInput">parentAccountRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleName">applicationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleName">parentAccountRoleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.timeouts"></a>

```typescript
public readonly timeouts: GrantApplicationRoleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference">GrantApplicationRoleTimeoutsOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `applicationRoleNameInput`<sup>Optional</sup> <a name="applicationRoleNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleNameInput"></a>

```typescript
public readonly applicationRoleNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentAccountRoleNameInput`<sup>Optional</sup> <a name="parentAccountRoleNameInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleNameInput"></a>

```typescript
public readonly parentAccountRoleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GrantApplicationRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `applicationRoleName`<sup>Required</sup> <a name="applicationRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.applicationRoleName"></a>

```typescript
public readonly applicationRoleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentAccountRoleName`<sup>Required</sup> <a name="parentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.parentAccountRoleName"></a>

```typescript
public readonly parentAccountRoleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantApplicationRoleConfig <a name="GrantApplicationRoleConfig" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.Initializer"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

const grantApplicationRoleConfig: grantApplicationRole.GrantApplicationRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationRoleName">applicationRoleName</a></code> | <code>string</code> | Specifies the identifier for the application role to grant. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The fully qualified name of the application on which application role will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#id GrantApplicationRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.parentAccountRoleName">parentAccountRoleName</a></code> | <code>string</code> | The fully qualified name of the account role on which application role will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationRoleName`<sup>Required</sup> <a name="applicationRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationRoleName"></a>

```typescript
public readonly applicationRoleName: string;
```

- *Type:* string

Specifies the identifier for the application role to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#application_role_name GrantApplicationRole#application_role_name}

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The fully qualified name of the application on which application role will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#application_name GrantApplicationRole#application_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#id GrantApplicationRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentAccountRoleName`<sup>Optional</sup> <a name="parentAccountRoleName" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.parentAccountRoleName"></a>

```typescript
public readonly parentAccountRoleName: string;
```

- *Type:* string

The fully qualified name of the account role on which application role will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#parent_account_role_name GrantApplicationRole#parent_account_role_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrantApplicationRoleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#timeouts GrantApplicationRole#timeouts}

---

### GrantApplicationRoleTimeouts <a name="GrantApplicationRoleTimeouts" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.Initializer"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

const grantApplicationRoleTimeouts: grantApplicationRole.GrantApplicationRoleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#create GrantApplicationRole#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#delete GrantApplicationRole#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#read GrantApplicationRole#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#update GrantApplicationRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#create GrantApplicationRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#delete GrantApplicationRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#read GrantApplicationRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_application_role#update GrantApplicationRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantApplicationRoleTimeoutsOutputReference <a name="GrantApplicationRoleTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.Initializer"></a>

```typescript
import { grantApplicationRole } from '@cdktf/provider-snowflake'

new grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrantApplicationRoleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantApplicationRole.GrantApplicationRoleTimeouts">GrantApplicationRoleTimeouts</a>

---



