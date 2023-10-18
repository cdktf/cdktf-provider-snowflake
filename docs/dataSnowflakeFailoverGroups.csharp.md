# `data_snowflake_failover_groups`

Refer to the Terraform Registory for docs: [`data_snowflake_failover_groups`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups).

# `dataSnowflakeFailoverGroups` Submodule <a name="`dataSnowflakeFailoverGroups` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFailoverGroups <a name="DataSnowflakeFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups snowflake_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFailoverGroups(Construct Scope, string Id, DataSnowflakeFailoverGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig">DataSnowflakeFailoverGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig">DataSnowflakeFailoverGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount">ResetInAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInAccount` <a name="ResetInAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount"></a>

```csharp
private void ResetInAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFailoverGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFailoverGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFailoverGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeFailoverGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeFailoverGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups">FailoverGroups</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput">InAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount">InAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FailoverGroups`<sup>Required</sup> <a name="FailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups"></a>

```csharp
public DataSnowflakeFailoverGroupsFailoverGroupsList FailoverGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InAccountInput`<sup>Optional</sup> <a name="InAccountInput" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput"></a>

```csharp
public string InAccountInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InAccount`<sup>Required</sup> <a name="InAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount"></a>

```csharp
public string InAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFailoverGroupsConfig <a name="DataSnowflakeFailoverGroupsConfig" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFailoverGroupsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string InAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount">InAccount</a></code> | <code>string</code> | Specifies the identifier for the account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InAccount`<sup>Optional</sup> <a name="InAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount"></a>

```csharp
public string InAccount { get; set; }
```

- *Type:* string

Specifies the identifier for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#in_account DataSnowflakeFailoverGroups#in_account}

---

### DataSnowflakeFailoverGroupsFailoverGroups <a name="DataSnowflakeFailoverGroupsFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFailoverGroupsFailoverGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFailoverGroupsFailoverGroupsList <a name="DataSnowflakeFailoverGroupsFailoverGroupsList" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFailoverGroupsFailoverGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get"></a>

```csharp
private DataSnowflakeFailoverGroupsFailoverGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeFailoverGroupsFailoverGroupsOutputReference <a name="DataSnowflakeFailoverGroupsFailoverGroupsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeFailoverGroupsFailoverGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator">AccountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary">IsPrimary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh">NextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary">Primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup">RegionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState">SecondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator"></a>

```csharp
public string AccountLocator { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NextScheduledRefresh`<sup>Required</sup> <a name="NextScheduledRefresh" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh"></a>

```csharp
public string NextScheduledRefresh { get; }
```

- *Type:* string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; }
```

- *Type:* string[]

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary"></a>

```csharp
public string Primary { get; }
```

- *Type:* string

---

##### `RegionGroup`<sup>Required</sup> <a name="RegionGroup" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup"></a>

```csharp
public string RegionGroup { get; }
```

- *Type:* string

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `SecondaryState`<sup>Required</sup> <a name="SecondaryState" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState"></a>

```csharp
public string SecondaryState { get; }
```

- *Type:* string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion"></a>

```csharp
public string SnowflakeRegion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeFailoverGroupsFailoverGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a>

---



