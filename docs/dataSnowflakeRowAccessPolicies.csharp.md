# `dataSnowflakeRowAccessPolicies` Submodule <a name="`dataSnowflakeRowAccessPolicies` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeRowAccessPolicies <a name="DataSnowflakeRowAccessPolicies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies snowflake_row_access_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPolicies(Construct Scope, string Id, DataSnowflakeRowAccessPoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig">DataSnowflakeRowAccessPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig">DataSnowflakeRowAccessPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn"></a>

```csharp
private void PutIn(DataSnowflakeRowAccessPoliciesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeRowAccessPoliciesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeRowAccessPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRowAccessPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRowAccessPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRowAccessPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRowAccessPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeRowAccessPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeRowAccessPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeRowAccessPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeRowAccessPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference">DataSnowflakeRowAccessPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference">DataSnowflakeRowAccessPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.rowAccessPolicies">RowAccessPolicies</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.inInput">InInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribeInput">WithDescribeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribe">WithDescribe</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.in"></a>

```csharp
public DataSnowflakeRowAccessPoliciesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference">DataSnowflakeRowAccessPoliciesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limit"></a>

```csharp
public DataSnowflakeRowAccessPoliciesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference">DataSnowflakeRowAccessPoliciesLimitOutputReference</a>

---

##### `RowAccessPolicies`<sup>Required</sup> <a name="RowAccessPolicies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.rowAccessPolicies"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesList RowAccessPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.inInput"></a>

```csharp
public DataSnowflakeRowAccessPoliciesIn InInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limitInput"></a>

```csharp
public DataSnowflakeRowAccessPoliciesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribeInput"></a>

```csharp
public object WithDescribeInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribe"></a>

```csharp
public object WithDescribe { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeRowAccessPoliciesConfig <a name="DataSnowflakeRowAccessPoliciesConfig" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataSnowflakeRowAccessPoliciesIn In = null,
    string Like = null,
    DataSnowflakeRowAccessPoliciesLimit Limit = null,
    object WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.withDescribe">WithDescribe</a></code> | <code>object</code> | Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.in"></a>

```csharp
public DataSnowflakeRowAccessPoliciesIn In { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#in DataSnowflakeRowAccessPolicies#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#like DataSnowflakeRowAccessPolicies#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.limit"></a>

```csharp
public DataSnowflakeRowAccessPoliciesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#limit DataSnowflakeRowAccessPolicies#limit}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.withDescribe"></a>

```csharp
public object WithDescribe { get; set; }
```

- *Type:* object

Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#with_describe DataSnowflakeRowAccessPolicies#with_describe}

---

### DataSnowflakeRowAccessPoliciesIn <a name="DataSnowflakeRowAccessPoliciesIn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesIn {
    object Account = null,
    string Application = null,
    string ApplicationPackage = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.account">Account</a></code> | <code>object</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.application">Application</a></code> | <code>string</code> | Returns records for the specified application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.applicationPackage">ApplicationPackage</a></code> | <code>string</code> | Returns records for the specified application package. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.account"></a>

```csharp
public object Account { get; set; }
```

- *Type:* object

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#account DataSnowflakeRowAccessPolicies#account}

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#application DataSnowflakeRowAccessPolicies#application}

---

##### `ApplicationPackage`<sup>Optional</sup> <a name="ApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.applicationPackage"></a>

```csharp
public string ApplicationPackage { get; set; }
```

- *Type:* string

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#application_package DataSnowflakeRowAccessPolicies#application_package}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#database DataSnowflakeRowAccessPolicies#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#schema DataSnowflakeRowAccessPolicies#schema}

---

### DataSnowflakeRowAccessPoliciesLimit <a name="DataSnowflakeRowAccessPoliciesLimit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#rows DataSnowflakeRowAccessPolicies#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/row_access_policies#from DataSnowflakeRowAccessPolicies#from}

---

### DataSnowflakeRowAccessPoliciesRowAccessPolicies <a name="DataSnowflakeRowAccessPoliciesRowAccessPolicies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPolicies {

};
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput {

};
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature {

};
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeRowAccessPoliciesInOutputReference <a name="DataSnowflakeRowAccessPoliciesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplicationPackage">ResetApplicationPackage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetApplication` <a name="ResetApplication" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetApplicationPackage` <a name="ResetApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplicationPackage"></a>

```csharp
private void ResetApplicationPackage()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.accountInput">AccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackageInput">ApplicationPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.account">Account</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackage">ApplicationPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.accountInput"></a>

```csharp
public object AccountInput { get; }
```

- *Type:* object

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `ApplicationPackageInput`<sup>Optional</sup> <a name="ApplicationPackageInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackageInput"></a>

```csharp
public string ApplicationPackageInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.account"></a>

```csharp
public object Account { get; }
```

- *Type:* object

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `ApplicationPackage`<sup>Required</sup> <a name="ApplicationPackage" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackage"></a>

```csharp
public string ApplicationPackage { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

---


### DataSnowflakeRowAccessPoliciesLimitOutputReference <a name="DataSnowflakeRowAccessPoliciesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.signature">Signature</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.signature"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList Signature { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get"></a>

```csharp
private DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get"></a>

```csharp
private DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies">DataSnowflakeRowAccessPoliciesRowAccessPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies">DataSnowflakeRowAccessPoliciesRowAccessPolicies</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get"></a>

```csharp
private DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput</a>

---



