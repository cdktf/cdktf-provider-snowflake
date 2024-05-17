# `dataSnowflakeSystemGetPrivatelinkConfig` Submodule <a name="`dataSnowflakeSystemGetPrivatelinkConfig` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetPrivatelinkConfig <a name="DataSnowflakeSystemGetPrivatelinkConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/data-sources/system_get_privatelink_config snowflake_system_get_privatelink_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeSystemGetPrivatelinkConfig(Construct Scope, string Id, DataSnowflakeSystemGetPrivatelinkConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetPrivatelinkConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetPrivatelinkConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetPrivatelinkConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeSystemGetPrivatelinkConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeSystemGetPrivatelinkConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeSystemGetPrivatelinkConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/data-sources/system_get_privatelink_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetPrivatelinkConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl">AccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId">AwsVpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId">AzurePlsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage">InternalStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl">OcspUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl">RegionlessAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl">RegionlessSnowsightUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl">SnowsightUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AccountUrl`<sup>Required</sup> <a name="AccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl"></a>

```csharp
public string AccountUrl { get; }
```

- *Type:* string

---

##### `AwsVpceId`<sup>Required</sup> <a name="AwsVpceId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId"></a>

```csharp
public string AwsVpceId { get; }
```

- *Type:* string

---

##### `AzurePlsId`<sup>Required</sup> <a name="AzurePlsId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId"></a>

```csharp
public string AzurePlsId { get; }
```

- *Type:* string

---

##### `InternalStage`<sup>Required</sup> <a name="InternalStage" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage"></a>

```csharp
public string InternalStage { get; }
```

- *Type:* string

---

##### `OcspUrl`<sup>Required</sup> <a name="OcspUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl"></a>

```csharp
public string OcspUrl { get; }
```

- *Type:* string

---

##### `RegionlessAccountUrl`<sup>Required</sup> <a name="RegionlessAccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl"></a>

```csharp
public string RegionlessAccountUrl { get; }
```

- *Type:* string

---

##### `RegionlessSnowsightUrl`<sup>Required</sup> <a name="RegionlessSnowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl"></a>

```csharp
public string RegionlessSnowsightUrl { get; }
```

- *Type:* string

---

##### `SnowsightUrl`<sup>Required</sup> <a name="SnowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl"></a>

```csharp
public string SnowsightUrl { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetPrivatelinkConfigConfig <a name="DataSnowflakeSystemGetPrivatelinkConfigConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeSystemGetPrivatelinkConfigConfig {
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
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



