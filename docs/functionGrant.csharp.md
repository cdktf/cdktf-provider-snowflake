# `functionGrant` Submodule <a name="`functionGrant` Submodule" id="@cdktf/provider-snowflake.functionGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionGrant <a name="FunctionGrant" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant snowflake_function_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionGrant(Construct Scope, string Id, FunctionGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig">FunctionGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig">FunctionGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArgumentDataTypes">ResetArgumentDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetEnableMultipleGrants">ResetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnFuture">ResetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetPrivilege">ResetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetReturnType">ResetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetShares">ResetShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.putArguments"></a>

```csharp
private void PutArguments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.putArguments.parameter.value"></a>

- *Type:* object

---

##### `ResetArgumentDataTypes` <a name="ResetArgumentDataTypes" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArgumentDataTypes"></a>

```csharp
private void ResetArgumentDataTypes()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetEnableMultipleGrants` <a name="ResetEnableMultipleGrants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetEnableMultipleGrants"></a>

```csharp
private void ResetEnableMultipleGrants()
```

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnFuture` <a name="ResetOnFuture" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnFuture"></a>

```csharp
private void ResetOnFuture()
```

##### `ResetPrivilege` <a name="ResetPrivilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetPrivilege"></a>

```csharp
private void ResetPrivilege()
```

##### `ResetReturnType` <a name="ResetReturnType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetReturnType"></a>

```csharp
private void ResetReturnType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetShares` <a name="ResetShares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetShares"></a>

```csharp
private void ResetShares()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FunctionGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList">FunctionGrantArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypesInput">ArgumentDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentsInput">ArgumentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrantsInput">EnableMultipleGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFutureInput">OnFutureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilegeInput">PrivilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.returnTypeInput">ReturnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.sharesInput">SharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFuture">OnFuture</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.shares">Shares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.arguments"></a>

```csharp
public FunctionGrantArgumentsList Arguments { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList">FunctionGrantArgumentsList</a>

---

##### `ArgumentDataTypesInput`<sup>Optional</sup> <a name="ArgumentDataTypesInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypesInput"></a>

```csharp
public string[] ArgumentDataTypesInput { get; }
```

- *Type:* string[]

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentsInput"></a>

```csharp
public object ArgumentsInput { get; }
```

- *Type:* object

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `EnableMultipleGrantsInput`<sup>Optional</sup> <a name="EnableMultipleGrantsInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrantsInput"></a>

```csharp
public object EnableMultipleGrantsInput { get; }
```

- *Type:* object

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnFutureInput`<sup>Optional</sup> <a name="OnFutureInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFutureInput"></a>

```csharp
public object OnFutureInput { get; }
```

- *Type:* object

---

##### `PrivilegeInput`<sup>Optional</sup> <a name="PrivilegeInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilegeInput"></a>

```csharp
public string PrivilegeInput { get; }
```

- *Type:* string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.returnTypeInput"></a>

```csharp
public string ReturnTypeInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SharesInput`<sup>Optional</sup> <a name="SharesInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.sharesInput"></a>

```csharp
public string[] SharesInput { get; }
```

- *Type:* string[]

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `ArgumentDataTypes`<sup>Required</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypes"></a>

```csharp
public string[] ArgumentDataTypes { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EnableMultipleGrants`<sup>Required</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; }
```

- *Type:* object

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnFuture`<sup>Required</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFuture"></a>

```csharp
public object OnFuture { get; }
```

- *Type:* object

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Shares`<sup>Required</sup> <a name="Shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.shares"></a>

```csharp
public string[] Shares { get; }
```

- *Type:* string[]

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionGrantArguments <a name="FunctionGrantArguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionGrantArguments {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments.property.name">Name</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments.property.type">Type</a></code> | <code>string</code> | The argument type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#name FunctionGrant#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArguments.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The argument type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#type FunctionGrant#type}

---

### FunctionGrantConfig <a name="FunctionGrantConfig" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionGrantConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string[] Roles,
    string[] ArgumentDataTypes = null,
    object Arguments = null,
    object EnableMultipleGrants = null,
    string FunctionName = null,
    string Id = null,
    object OnFuture = null,
    string Privilege = null,
    string ReturnType = null,
    string SchemaName = null,
    string[] Shares = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.roles">Roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.argumentDataTypes">ArgumentDataTypes</a></code> | <code>string[]</code> | List of the argument data types for the function (must be present if function has arguments and function_name is present). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.arguments">Arguments</a></code> | <code>object</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.enableMultipleGrants">EnableMultipleGrants</a></code> | <code>object</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.functionName">FunctionName</a></code> | <code>string</code> | The name of the function on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#id FunctionGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onFuture">OnFuture</a></code> | <code>object</code> | When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.privilege">Privilege</a></code> | <code>string</code> | The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.returnType">ReturnType</a></code> | <code>string</code> | The return type of the function (must be present if function_name is present). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.shares">Shares</a></code> | <code>string[]</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#database_name FunctionGrant#database_name}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#roles FunctionGrant#roles}

---

##### `ArgumentDataTypes`<sup>Optional</sup> <a name="ArgumentDataTypes" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.argumentDataTypes"></a>

```csharp
public string[] ArgumentDataTypes { get; set; }
```

- *Type:* string[]

List of the argument data types for the function (must be present if function has arguments and function_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#argument_data_types FunctionGrant#argument_data_types}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.arguments"></a>

```csharp
public object Arguments { get; set; }
```

- *Type:* object

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#arguments FunctionGrant#arguments}

---

##### `EnableMultipleGrants`<sup>Optional</sup> <a name="EnableMultipleGrants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.enableMultipleGrants"></a>

```csharp
public object EnableMultipleGrants { get; set; }
```

- *Type:* object

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#enable_multiple_grants FunctionGrant#enable_multiple_grants}

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

The name of the function on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#function_name FunctionGrant#function_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#id FunctionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnFuture`<sup>Optional</sup> <a name="OnFuture" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onFuture"></a>

```csharp
public object OnFuture { get; set; }
```

- *Type:* object

When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema.

When this is true and no schema_name is provided apply this grant on all future functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#on_future FunctionGrant#on_future}

---

##### `Privilege`<sup>Optional</sup> <a name="Privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.privilege"></a>

```csharp
public string Privilege { get; set; }
```

- *Type:* string

The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#privilege FunctionGrant#privilege}

---

##### `ReturnType`<sup>Optional</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.returnType"></a>

```csharp
public string ReturnType { get; set; }
```

- *Type:* string

The return type of the function (must be present if function_name is present).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#return_type FunctionGrant#return_type}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#schema_name FunctionGrant#schema_name}

---

##### `Shares`<sup>Optional</sup> <a name="Shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.shares"></a>

```csharp
public string[] Shares { get; set; }
```

- *Type:* string[]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#shares FunctionGrant#shares}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function_grant#with_grant_option FunctionGrant#with_grant_option}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionGrantArgumentsList <a name="FunctionGrantArgumentsList" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionGrantArgumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.get"></a>

```csharp
private FunctionGrantArgumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionGrantArgumentsOutputReference <a name="FunctionGrantArgumentsOutputReference" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FunctionGrantArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantArgumentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


