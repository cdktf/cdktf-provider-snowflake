# `snowflake_materialized_view_grant`

Refer to the Terraform Registory for docs: [`snowflake_materialized_view_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant).

# `materializedViewGrant` Submodule <a name="`materializedViewGrant` Submodule" id="@cdktf/provider-snowflake.materializedViewGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedViewGrant <a name="MaterializedViewGrant" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant snowflake_materialized_view_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer"></a>

```typescript
import { materializedViewGrant } from '@cdktf/provider-snowflake'

new materializedViewGrant.MaterializedViewGrant(scope: Construct, id: string, config: MaterializedViewGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig">MaterializedViewGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig">MaterializedViewGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetEnableMultipleGrants">resetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetMaterializedViewName">resetMaterializedViewName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOnAll">resetOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOnFuture">resetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetPrivilege">resetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetRevertOwnershipToRoleName">resetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetShares">resetShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnableMultipleGrants` <a name="resetEnableMultipleGrants" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetEnableMultipleGrants"></a>

```typescript
public resetEnableMultipleGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaterializedViewName` <a name="resetMaterializedViewName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetMaterializedViewName"></a>

```typescript
public resetMaterializedViewName(): void
```

##### `resetOnAll` <a name="resetOnAll" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOnAll"></a>

```typescript
public resetOnAll(): void
```

##### `resetOnFuture` <a name="resetOnFuture" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetOnFuture"></a>

```typescript
public resetOnFuture(): void
```

##### `resetPrivilege` <a name="resetPrivilege" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetPrivilege"></a>

```typescript
public resetPrivilege(): void
```

##### `resetRevertOwnershipToRoleName` <a name="resetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetRevertOwnershipToRoleName"></a>

```typescript
public resetRevertOwnershipToRoleName(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetShares` <a name="resetShares" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetShares"></a>

```typescript
public resetShares(): void
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isConstruct"></a>

```typescript
import { materializedViewGrant } from '@cdktf/provider-snowflake'

materializedViewGrant.MaterializedViewGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformElement"></a>

```typescript
import { materializedViewGrant } from '@cdktf/provider-snowflake'

materializedViewGrant.MaterializedViewGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformResource"></a>

```typescript
import { materializedViewGrant } from '@cdktf/provider-snowflake'

materializedViewGrant.MaterializedViewGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.enableMultipleGrantsInput">enableMultipleGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.materializedViewNameInput">materializedViewNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onAllInput">onAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onFutureInput">onFutureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.privilegeInput">privilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.revertOwnershipToRoleNameInput">revertOwnershipToRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.sharesInput">sharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.materializedViewName">materializedViewName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onAll">onAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onFuture">onFuture</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.privilege">privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.shares">shares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `enableMultipleGrantsInput`<sup>Optional</sup> <a name="enableMultipleGrantsInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.enableMultipleGrantsInput"></a>

```typescript
public readonly enableMultipleGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `materializedViewNameInput`<sup>Optional</sup> <a name="materializedViewNameInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.materializedViewNameInput"></a>

```typescript
public readonly materializedViewNameInput: string;
```

- *Type:* string

---

##### `onAllInput`<sup>Optional</sup> <a name="onAllInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onAllInput"></a>

```typescript
public readonly onAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onFutureInput`<sup>Optional</sup> <a name="onFutureInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onFutureInput"></a>

```typescript
public readonly onFutureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilegeInput`<sup>Optional</sup> <a name="privilegeInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.privilegeInput"></a>

```typescript
public readonly privilegeInput: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="revertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.revertOwnershipToRoleNameInput"></a>

```typescript
public readonly revertOwnershipToRoleNameInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `sharesInput`<sup>Optional</sup> <a name="sharesInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.sharesInput"></a>

```typescript
public readonly sharesInput: string[];
```

- *Type:* string[]

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `enableMultipleGrants`<sup>Required</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.enableMultipleGrants"></a>

```typescript
public readonly enableMultipleGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `materializedViewName`<sup>Required</sup> <a name="materializedViewName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.materializedViewName"></a>

```typescript
public readonly materializedViewName: string;
```

- *Type:* string

---

##### `onAll`<sup>Required</sup> <a name="onAll" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onAll"></a>

```typescript
public readonly onAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onFuture`<sup>Required</sup> <a name="onFuture" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.onFuture"></a>

```typescript
public readonly onFuture: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.privilege"></a>

```typescript
public readonly privilege: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleName`<sup>Required</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `shares`<sup>Required</sup> <a name="shares" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.shares"></a>

```typescript
public readonly shares: string[];
```

- *Type:* string[]

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedViewGrantConfig <a name="MaterializedViewGrantConfig" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.Initializer"></a>

```typescript
import { materializedViewGrant } from '@cdktf/provider-snowflake'

const materializedViewGrantConfig: materializedViewGrant.MaterializedViewGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database containing the current or future materialized views on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#id MaterializedViewGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.materializedViewName">materializedViewName</a></code> | <code>string</code> | The name of the materialized view on which to grant privileges immediately (only valid if on_future and on_all are false). |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.onAll">onAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true and a schema_name is provided, apply this grant on all materialized views in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.onFuture">onFuture</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true and a schema_name is provided, apply this grant on all future materialized views in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.privilege">privilege</a></code> | <code>string</code> | The privilege to grant on the current or future materialized view. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.roles">roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema containing the current or future materialized views on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.shares">shares</a></code> | <code>string[]</code> | Grants privilege to these shares (only valid if on_future and on_all are false). |
| <code><a href="#@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database containing the current or future materialized views on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#database_name MaterializedViewGrant#database_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.enableMultipleGrants"></a>

```typescript
public readonly enableMultipleGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#enable_multiple_grants MaterializedViewGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#id MaterializedViewGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `materializedViewName`<sup>Optional</sup> <a name="materializedViewName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.materializedViewName"></a>

```typescript
public readonly materializedViewName: string;
```

- *Type:* string

The name of the materialized view on which to grant privileges immediately (only valid if on_future and on_all are false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#materialized_view_name MaterializedViewGrant#materialized_view_name}

---

##### `onAll`<sup>Optional</sup> <a name="onAll" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.onAll"></a>

```typescript
public readonly onAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true and a schema_name is provided, apply this grant on all materialized views in the given schema.

When this is true and no schema_name is provided apply this grant on all materialized views in the given database. The materialized_view_name and shares fields must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#on_all MaterializedViewGrant#on_all}

---

##### `onFuture`<sup>Optional</sup> <a name="onFuture" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.onFuture"></a>

```typescript
public readonly onFuture: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true and a schema_name is provided, apply this grant on all future materialized views in the given schema.

When this is true and no schema_name is provided apply this grant on all future materialized views in the given database. The materialized_view_name and shares fields must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#on_future MaterializedViewGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.privilege"></a>

```typescript
public readonly privilege: string;
```

- *Type:* string

The privilege to grant on the current or future materialized view.

To grant all privileges, use the value `ALL PRIVILEGES`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#privilege MaterializedViewGrant#privilege}

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#revert_ownership_to_role_name MaterializedViewGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#roles MaterializedViewGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The name of the schema containing the current or future materialized views on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#schema_name MaterializedViewGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="shares" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.shares"></a>

```typescript
public readonly shares: string[];
```

- *Type:* string[]

Grants privilege to these shares (only valid if on_future and on_all are false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#shares MaterializedViewGrant#shares}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.materializedViewGrant.MaterializedViewGrantConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/materialized_view_grant#with_grant_option MaterializedViewGrant#with_grant_option}

---



