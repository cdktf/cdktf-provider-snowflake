# `data_snowflake_file_formats`

Refer to the Terraform Registory for docs: [`data_snowflake_file_formats`](https://www.terraform.io/docs/providers/snowflake/d/file_formats).

# `dataSnowflakeFileFormats` Submodule <a name="`dataSnowflakeFileFormats` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFileFormats <a name="DataSnowflakeFileFormats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats snowflake_file_formats}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFileFormats(Construct Scope, string Id, DataSnowflakeFileFormatsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig">DataSnowflakeFileFormatsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig">DataSnowflakeFileFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFileFormats.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFileFormats.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFileFormats.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats">FileFormats</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FileFormats`<sup>Required</sup> <a name="FileFormats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats"></a>

```csharp
public DataSnowflakeFileFormatsFileFormatsList FileFormats { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFileFormatsConfig <a name="DataSnowflakeFileFormatsConfig" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFileFormatsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Schema,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.database">Database</a></code> | <code>string</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.schema">Schema</a></code> | <code>string</code> | The schema from which to return the file formats from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats#id DataSnowflakeFileFormats#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats#database DataSnowflakeFileFormats#database}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema from which to return the file formats from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats#schema DataSnowflakeFileFormats#schema}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeFileFormatsFileFormats <a name="DataSnowflakeFileFormatsFileFormats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFileFormatsFileFormats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFileFormatsFileFormatsList <a name="DataSnowflakeFileFormatsFileFormatsList" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFileFormatsFileFormatsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get"></a>

```csharp
private DataSnowflakeFileFormatsFileFormatsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeFileFormatsFileFormatsOutputReference <a name="DataSnowflakeFileFormatsFileFormatsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFileFormatsFileFormatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.formatType">FormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.formatType"></a>

```csharp
public string FormatType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeFileFormatsFileFormats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a>

---



