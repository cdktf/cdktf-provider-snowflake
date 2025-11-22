# `dataSnowflakeAuthenticationPolicies` Submodule <a name="`dataSnowflakeAuthenticationPolicies` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeAuthenticationPolicies <a name="DataSnowflakeAuthenticationPolicies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies snowflake_authentication_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPolicies(Construct Scope, string Id, DataSnowflakeAuthenticationPoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig">DataSnowflakeAuthenticationPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig">DataSnowflakeAuthenticationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn">PutOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOn">ResetOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn"></a>

```csharp
private void PutIn(DataSnowflakeAuthenticationPoliciesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeAuthenticationPoliciesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

---

##### `PutOn` <a name="PutOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn"></a>

```csharp
private void PutOn(DataSnowflakeAuthenticationPoliciesOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOn` <a name="ResetOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOn"></a>

```csharp
private void ResetOn()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeAuthenticationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeAuthenticationPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeAuthenticationPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeAuthenticationPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeAuthenticationPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeAuthenticationPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeAuthenticationPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeAuthenticationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeAuthenticationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.authenticationPolicies">AuthenticationPolicies</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference">DataSnowflakeAuthenticationPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference">DataSnowflakeAuthenticationPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.on">On</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference">DataSnowflakeAuthenticationPoliciesOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.inInput">InInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.onInput">OnInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribe">WithDescribe</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthenticationPolicies`<sup>Required</sup> <a name="AuthenticationPolicies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.authenticationPolicies"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList AuthenticationPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList</a>

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.in"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference">DataSnowflakeAuthenticationPoliciesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limit"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference">DataSnowflakeAuthenticationPoliciesLimitOutputReference</a>

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.on"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesOnOutputReference On { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference">DataSnowflakeAuthenticationPoliciesOnOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.inInput"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesIn InInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limitInput"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.onInput"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesOn OnInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeAuthenticationPoliciesAuthenticationPolicies <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPolicies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPolicies {

};
```


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput {

};
```


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput {

};
```


### DataSnowflakeAuthenticationPoliciesConfig <a name="DataSnowflakeAuthenticationPoliciesConfig" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeAuthenticationPoliciesIn In = null,
    string Like = null,
    DataSnowflakeAuthenticationPoliciesLimit Limit = null,
    DataSnowflakeAuthenticationPoliciesOn On = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.on">On</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | (Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.in"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesIn In { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#in DataSnowflakeAuthenticationPolicies#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#like DataSnowflakeAuthenticationPolicies#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.limit"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#limit DataSnowflakeAuthenticationPolicies#limit}

---

##### `On`<sup>Optional</sup> <a name="On" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.on"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesOn On { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#on DataSnowflakeAuthenticationPolicies#on}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#starts_with DataSnowflakeAuthenticationPolicies#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

(Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#with_describe DataSnowflakeAuthenticationPolicies#with_describe}

---

### DataSnowflakeAuthenticationPoliciesIn <a name="DataSnowflakeAuthenticationPoliciesIn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesIn {
    bool|IResolvable Account = null,
    string Application = null,
    string ApplicationPackage = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.account">Account</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.application">Application</a></code> | <code>string</code> | Returns records for the specified application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.applicationPackage">ApplicationPackage</a></code> | <code>string</code> | Returns records for the specified application package. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#application DataSnowflakeAuthenticationPolicies#application}

---

##### `ApplicationPackage`<sup>Optional</sup> <a name="ApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.applicationPackage"></a>

```csharp
public string ApplicationPackage { get; set; }
```

- *Type:* string

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#application_package DataSnowflakeAuthenticationPolicies#application_package}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#database DataSnowflakeAuthenticationPolicies#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#schema DataSnowflakeAuthenticationPolicies#schema}

---

### DataSnowflakeAuthenticationPoliciesLimit <a name="DataSnowflakeAuthenticationPoliciesLimit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#rows DataSnowflakeAuthenticationPolicies#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#from DataSnowflakeAuthenticationPolicies#from}

---

### DataSnowflakeAuthenticationPoliciesOn <a name="DataSnowflakeAuthenticationPoliciesOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesOn {
    bool|IResolvable Account = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.account">Account</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.user">User</a></code> | <code>string</code> | Returns records for the specified user. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/authentication_policies#user DataSnowflakeAuthenticationPolicies#user}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.clientTypes">ClientTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaPolicy">MfaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.patPolicy">PatPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.authenticationMethods"></a>

```csharp
public string AuthenticationMethods { get; }
```

- *Type:* string

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.clientTypes"></a>

```csharp
public string ClientTypes { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```csharp
public string MfaAuthenticationMethods { get; }
```

- *Type:* string

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; }
```

- *Type:* string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaPolicy"></a>

```csharp
public string MfaPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.patPolicy"></a>

```csharp
public string PatPolicy { get; }
```

- *Type:* string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.securityIntegrations"></a>

```csharp
public string SecurityIntegrations { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```csharp
public string WorkloadIdentityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput</a>

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get"></a>

```csharp
private DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies">DataSnowflakeAuthenticationPoliciesAuthenticationPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies">DataSnowflakeAuthenticationPoliciesAuthenticationPolicies</a>

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get"></a>

```csharp
private DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput</a>

---


### DataSnowflakeAuthenticationPoliciesInOutputReference <a name="DataSnowflakeAuthenticationPoliciesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplicationPackage">ResetApplicationPackage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetApplication` <a name="ResetApplication" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetApplicationPackage` <a name="ResetApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplicationPackage"></a>

```csharp
private void ResetApplicationPackage()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackageInput">ApplicationPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.account">Account</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackage">ApplicationPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `ApplicationPackageInput`<sup>Optional</sup> <a name="ApplicationPackageInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackageInput"></a>

```csharp
public string ApplicationPackageInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `ApplicationPackage`<sup>Required</sup> <a name="ApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackage"></a>

```csharp
public string ApplicationPackage { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

---


### DataSnowflakeAuthenticationPoliciesLimitOutputReference <a name="DataSnowflakeAuthenticationPoliciesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

---


### DataSnowflakeAuthenticationPoliciesOnOutputReference <a name="DataSnowflakeAuthenticationPoliciesOnOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeAuthenticationPoliciesOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.account">Account</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeAuthenticationPoliciesOn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

---



