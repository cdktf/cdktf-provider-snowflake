# `dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule <a name="`dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfo <a name="DataSnowflakeSystemGetSnowflakePlatformInfo" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeSystemGetSnowflakePlatformInfo(Construct Scope, string Id, DataSnowflakeSystemGetSnowflakePlatformInfoConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetSnowflakePlatformInfo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetSnowflakePlatformInfo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetSnowflakePlatformInfo.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetSnowflakePlatformInfo.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeSystemGetSnowflakePlatformInfo to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeSystemGetSnowflakePlatformInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/system_get_snowflake_platform_info#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetSnowflakePlatformInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds">AwsVpcIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds">AzureVnetSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AwsVpcIds`<sup>Required</sup> <a name="AwsVpcIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds"></a>

```csharp
public string[] AwsVpcIds { get; }
```

- *Type:* string[]

---

##### `AzureVnetSubnetIds`<sup>Required</sup> <a name="AzureVnetSubnetIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds"></a>

```csharp
public string[] AzureVnetSubnetIds { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfoConfig <a name="DataSnowflakeSystemGetSnowflakePlatformInfoConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeSystemGetSnowflakePlatformInfoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



