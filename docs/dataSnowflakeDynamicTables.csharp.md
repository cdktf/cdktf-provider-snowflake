# `dataSnowflakeDynamicTables` Submodule <a name="`dataSnowflakeDynamicTables` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeDynamicTables <a name="DataSnowflakeDynamicTables" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables snowflake_dynamic_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTables(Construct Scope, string Id, DataSnowflakeDynamicTablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig">DataSnowflakeDynamicTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig">DataSnowflakeDynamicTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike">PutLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn"></a>

```csharp
private void PutIn(DataSnowflakeDynamicTablesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `PutLike` <a name="PutLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike"></a>

```csharp
private void PutLike(DataSnowflakeDynamicTablesLike Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeDynamicTablesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeDynamicTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeDynamicTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeDynamicTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeDynamicTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeDynamicTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeDynamicTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeDynamicTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like">Like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records">Records</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput">InInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput">LikeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in"></a>

```csharp
public DataSnowflakeDynamicTablesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a>

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like"></a>

```csharp
public DataSnowflakeDynamicTablesLikeOutputReference Like { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit"></a>

```csharp
public DataSnowflakeDynamicTablesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a>

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records"></a>

```csharp
public DataSnowflakeDynamicTablesRecordsList Records { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput"></a>

```csharp
public DataSnowflakeDynamicTablesIn InInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput"></a>

```csharp
public DataSnowflakeDynamicTablesLike LikeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput"></a>

```csharp
public DataSnowflakeDynamicTablesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeDynamicTablesConfig <a name="DataSnowflakeDynamicTablesConfig" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataSnowflakeDynamicTablesIn In = null,
    DataSnowflakeDynamicTablesLike Like = null,
    DataSnowflakeDynamicTablesLimit Limit = null,
    string StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in">In</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like">Like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | like block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Optionally filters the command output based on the characters that appear at the beginning of the object name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in"></a>

```csharp
public DataSnowflakeDynamicTablesIn In { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#in DataSnowflakeDynamicTables#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like"></a>

```csharp
public DataSnowflakeDynamicTablesLike Like { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#like DataSnowflakeDynamicTables#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit"></a>

```csharp
public DataSnowflakeDynamicTablesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#limit DataSnowflakeDynamicTables#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Optionally filters the command output based on the characters that appear at the beginning of the object name.

The string is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#starts_with DataSnowflakeDynamicTables#starts_with}

---

### DataSnowflakeDynamicTablesIn <a name="DataSnowflakeDynamicTablesIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesIn {
    object Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account">Account</a></code> | <code>object</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database (db_name). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema (schema_name). |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account"></a>

```csharp
public object Account { get; set; }
```

- *Type:* object

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#account DataSnowflakeDynamicTables#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database (db_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#database DataSnowflakeDynamicTables#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema (schema_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#schema DataSnowflakeDynamicTables#schema}

---

### DataSnowflakeDynamicTablesLike <a name="DataSnowflakeDynamicTablesLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesLike {
    string Pattern
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern">Pattern</a></code> | <code>string</code> | Filters the command output by object name. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Filters the command output by object name.

The filter uses case-insensitive pattern matching with support for SQL wildcard characters (% and _).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#pattern DataSnowflakeDynamicTables#pattern}

---

### DataSnowflakeDynamicTablesLimit <a name="DataSnowflakeDynamicTablesLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesLimit {
    string From = null,
    double Rows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from">From</a></code> | <code>string</code> | The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows">Rows</a></code> | <code>double</code> | Specifies the maximum number of rows to return. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results.

This enables fetching the specified number of rows following the first row whose object name matches the specified string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#from DataSnowflakeDynamicTables#from}

---

##### `Rows`<sup>Optional</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

Specifies the maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/dynamic_tables#rows DataSnowflakeDynamicTables#rows}

---

### DataSnowflakeDynamicTablesRecords <a name="DataSnowflakeDynamicTablesRecords" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesRecords {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeDynamicTablesInOutputReference <a name="DataSnowflakeDynamicTablesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput">AccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account">Account</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput"></a>

```csharp
public object AccountInput { get; }
```

- *Type:* object

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account"></a>

```csharp
public object Account { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeDynamicTablesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---


### DataSnowflakeDynamicTablesLikeOutputReference <a name="DataSnowflakeDynamicTablesLikeOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesLikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeDynamicTablesLike InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---


### DataSnowflakeDynamicTablesLimitOutputReference <a name="DataSnowflakeDynamicTablesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows">ResetRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetRows` <a name="ResetRows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows"></a>

```csharp
private void ResetRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeDynamicTablesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---


### DataSnowflakeDynamicTablesRecordsList <a name="DataSnowflakeDynamicTablesRecordsList" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get"></a>

```csharp
private DataSnowflakeDynamicTablesRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeDynamicTablesRecordsOutputReference <a name="DataSnowflakeDynamicTablesRecordsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeDynamicTablesRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering">AutomaticClustering</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes">Bytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy">ClusterBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp">DataTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone">IsClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica">IsReplica</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn">LastSuspendedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode">RefreshMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason">RefreshModeReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState">SchedulingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag">TargetLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticClustering`<sup>Required</sup> <a name="AutomaticClustering" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering"></a>

```csharp
public IResolvable AutomaticClustering { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes"></a>

```csharp
public double Bytes { get; }
```

- *Type:* double

---

##### `ClusterBy`<sup>Required</sup> <a name="ClusterBy" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy"></a>

```csharp
public string ClusterBy { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DataTimestamp`<sup>Required</sup> <a name="DataTimestamp" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp"></a>

```csharp
public string DataTimestamp { get; }
```

- *Type:* string

---

##### `IsClone`<sup>Required</sup> <a name="IsClone" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone"></a>

```csharp
public IResolvable IsClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReplica`<sup>Required</sup> <a name="IsReplica" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica"></a>

```csharp
public IResolvable IsReplica { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastSuspendedOn`<sup>Required</sup> <a name="LastSuspendedOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn"></a>

```csharp
public string LastSuspendedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `RefreshMode`<sup>Required</sup> <a name="RefreshMode" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode"></a>

```csharp
public string RefreshMode { get; }
```

- *Type:* string

---

##### `RefreshModeReason`<sup>Required</sup> <a name="RefreshModeReason" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason"></a>

```csharp
public string RefreshModeReason { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `SchedulingState`<sup>Required</sup> <a name="SchedulingState" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState"></a>

```csharp
public string SchedulingState { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TargetLag`<sup>Required</sup> <a name="TargetLag" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag"></a>

```csharp
public string TargetLag { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeDynamicTablesRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a>

---



