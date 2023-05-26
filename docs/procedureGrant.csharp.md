# `snowflake_procedure_grant`

Refer to the Terraform Registory for docs: [`snowflake_procedure_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant).

# `procedureGrant` Submodule <a name="`procedureGrant` Submodule" id="@cdktf/provider-snowflake.procedureGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureGrant <a name="ProcedureGrant" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant snowflake_procedure_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ProcedureGrant(Construct Scope, string Id, ProcedureGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig">ProcedureGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig">ProcedureGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArgumentDataTypes">ResetArgumentDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnAll">ResetOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetProcedureName">ResetProcedureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetShares">ResetShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArgumentDataTypes` <a name="ResetArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetArgumentDataTypes"></a>

```csharp
private void ResetArgumentDataTypes()
```

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetEnableMultipleGrants"></a>

```csharp
private void ResetEnableMultipleGrants()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnAll` <a name="ResetOnAll" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnAll"></a>

```csharp
private void ResetOnAll()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetOnFuture"></a>

```csharp
private void ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetPrivilege"></a>

```csharp
private void ResetPrivilege()
```

##### `ResetProcedureName` <a name="ResetProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetProcedureName"></a>

```csharp
private void ResetProcedureName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetShares` <a name="ResetShares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetShares"></a>

```csharp
private void ResetShares()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ProcedureGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ProcedureGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ProcedureGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypesInput">ArgumentDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onAllInput">OnAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFutureInput">OnFutureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureNameInput">ProcedureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.sharesInput">SharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onAll">OnAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFuture">OnFuture</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureName">ProcedureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.shares">Shares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArgumentDataTypesInput`<sup>Optional</sup> <a name="ArgumentDataTypesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypesInput"></a>

```csharp
public string[] ArgumentDataTypesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrantsInput"></a>

```csharp
public object EnableMultipleGrantsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnAllInput`<sup>Optional</sup> <a name="OnAllInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onAllInput"></a>

```csharp
public object OnAllInput { get; }
```

- *Type:* object

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFutureInput"></a>

```csharp
public object OnFutureInput { get; }
```

- *Type:* object

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilegeInput"></a>

```csharp
public string PrivilegeInput { get; }
```

- *Type:* string

---

##### `ProcedureNameInput`<sup>Optional</sup> <a name="ProcedureNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureNameInput"></a>

```csharp
public string ProcedureNameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SharesInput`<sup>Optional</sup> <a name="SharesInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.sharesInput"></a>

```csharp
public string[] SharesInput { get; }
```

- *Type:* string[]

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `ArgumentDataTypes`<sup>Required</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.argumentDataTypes"></a>

```csharp
public string[] ArgumentDataTypes { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnAll`<sup>Required</sup> <a name="OnAll" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onAll"></a>

```csharp
public object OnAll { get; }
```

- *Type:* object

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.onFuture"></a>

```csharp
public object OnFuture { get; }
```

- *Type:* object

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `ProcedureName`<sup>Required</sup> <a name="ProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.procedureName"></a>

```csharp
public string ProcedureName { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Shares`<sup>Required</sup> <a name="Shares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.shares"></a>

```csharp
public string[] Shares { get; }
```

- *Type:* string[]

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureGrantConfig <a name="ProcedureGrantConfig" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ProcedureGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string[] Roles,
    string[] ArgumentDataTypes = null,
    object EnableMultipleGrants = null,
    string Id = null,
    object OnAll = null,
    object OnFuture = null,
    string Privilege = null,
    string ProcedureName = null,
    string SchemaName = null,
    string[] Shares = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database containing the current or future procedures on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.roles">Roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>string[]</code> | List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#id ProcedureGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onAll">OnAll</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all procedures in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onFuture">OnFuture</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.privilege">Privilege</a></code> | <code>string</code> | The privilege to grant on the current or future procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.procedureName">ProcedureName</a></code> | <code>string</code> | The name of the procedure on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema containing the current or future procedures on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.shares">Shares</a></code> | <code>string[]</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#database_name ProcedureGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#roles ProcedureGrant#roles}

---

##### `ArgumentDataTypes`<sup>Optional</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.argumentDataTypes"></a>

```csharp
public string[] ArgumentDataTypes { get; set; }
```

- *Type:* string[]

List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#argument_data_types ProcedureGrant#argument_data_types}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; set; }
```

- *Type:* object

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#enable_multiple_grants ProcedureGrant#enable_multiple_grants}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#id ProcedureGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAll`<sup>Optional</sup> <a name="OnAll" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onAll"></a>

```csharp
public object OnAll { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all procedures in the given schema.

When this is true and no schema_name is provided apply this grant on all procedures in the given database. The procedure_name and shares fields must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#on_all ProcedureGrant#on_all}

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.onFuture"></a>

```csharp
public object OnFuture { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema.

When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#on_future ProcedureGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.privilege"></a>

```csharp
public string Privilege { get; set; }
```

- *Type:* string

The privilege to grant on the current or future procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#privilege ProcedureGrant#privilege}

---

##### `ProcedureName`<sup>Optional</sup> <a name="ProcedureName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.procedureName"></a>

```csharp
public string ProcedureName { get; set; }
```

- *Type:* string

The name of the procedure on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#procedure_name ProcedureGrant#procedure_name}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema containing the current or future procedures on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#schema_name ProcedureGrant#schema_name}

---

##### `Shares`<sup>Optional</sup> <a name="Shares" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.shares"></a>

```csharp
public string[] Shares { get; set; }
```

- *Type:* string[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#shares ProcedureGrant#shares}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.procedureGrant.ProcedureGrantConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/procedure_grant#with_grant_option ProcedureGrant#with_grant_option}

---



