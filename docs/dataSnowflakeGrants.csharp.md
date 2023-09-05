# `data_snowflake_grants`

Refer to the Terraform Registory for docs: [`data_snowflake_grants`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants).

# `dataSnowflakeGrants` Submodule <a name="`dataSnowflakeGrants` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeGrants <a name="DataSnowflakeGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants snowflake_grants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrants(Construct Scope, string Id, DataSnowflakeGrantsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn">PutFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo">PutFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf">PutGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn">PutGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo">PutGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn">ResetFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo">ResetFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf">ResetGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn">ResetGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo">ResetGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFutureGrantsIn` <a name="PutFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn"></a>

```csharp
private void PutFutureGrantsIn(DataSnowflakeGrantsFutureGrantsIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `PutFutureGrantsTo` <a name="PutFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo"></a>

```csharp
private void PutFutureGrantsTo(DataSnowflakeGrantsFutureGrantsTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `PutGrantsOf` <a name="PutGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf"></a>

```csharp
private void PutGrantsOf(DataSnowflakeGrantsGrantsOf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `PutGrantsOn` <a name="PutGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn"></a>

```csharp
private void PutGrantsOn(DataSnowflakeGrantsGrantsOn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `PutGrantsTo` <a name="PutGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo"></a>

```csharp
private void PutGrantsTo(DataSnowflakeGrantsGrantsTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `ResetFutureGrantsIn` <a name="ResetFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn"></a>

```csharp
private void ResetFutureGrantsIn()
```

##### `ResetFutureGrantsTo` <a name="ResetFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo"></a>

```csharp
private void ResetFutureGrantsTo()
```

##### `ResetGrantsOf` <a name="ResetGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf"></a>

```csharp
private void ResetGrantsOf()
```

##### `ResetGrantsOn` <a name="ResetGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn"></a>

```csharp
private void ResetGrantsOn()
```

##### `ResetGrantsTo` <a name="ResetGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo"></a>

```csharp
private void ResetGrantsTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeGrants.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeGrants.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeGrants.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn">FutureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo">FutureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants">Grants</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf">GrantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn">GrantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo">GrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput">FutureGrantsInInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput">FutureGrantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput">GrantsOfInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput">GrantsOnInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput">GrantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FutureGrantsIn`<sup>Required</sup> <a name="FutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsInOutputReference FutureGrantsIn { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a>

---

##### `FutureGrantsTo`<sup>Required</sup> <a name="FutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsToOutputReference FutureGrantsTo { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants"></a>

```csharp
public DataSnowflakeGrantsGrantsList Grants { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a>

---

##### `GrantsOf`<sup>Required</sup> <a name="GrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf"></a>

```csharp
public DataSnowflakeGrantsGrantsOfOutputReference GrantsOf { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a>

---

##### `GrantsOn`<sup>Required</sup> <a name="GrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn"></a>

```csharp
public DataSnowflakeGrantsGrantsOnOutputReference GrantsOn { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a>

---

##### `GrantsTo`<sup>Required</sup> <a name="GrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo"></a>

```csharp
public DataSnowflakeGrantsGrantsToOutputReference GrantsTo { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a>

---

##### `FutureGrantsInInput`<sup>Optional</sup> <a name="FutureGrantsInInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsIn FutureGrantsInInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `FutureGrantsToInput`<sup>Optional</sup> <a name="FutureGrantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsTo FutureGrantsToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `GrantsOfInput`<sup>Optional</sup> <a name="GrantsOfInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput"></a>

```csharp
public DataSnowflakeGrantsGrantsOf GrantsOfInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `GrantsOnInput`<sup>Optional</sup> <a name="GrantsOnInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput"></a>

```csharp
public DataSnowflakeGrantsGrantsOn GrantsOnInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `GrantsToInput`<sup>Optional</sup> <a name="GrantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput"></a>

```csharp
public DataSnowflakeGrantsGrantsTo GrantsToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeGrantsConfig <a name="DataSnowflakeGrantsConfig" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataSnowflakeGrantsFutureGrantsIn FutureGrantsIn = null,
    DataSnowflakeGrantsFutureGrantsTo FutureGrantsTo = null,
    DataSnowflakeGrantsGrantsOf GrantsOf = null,
    DataSnowflakeGrantsGrantsOn GrantsOn = null,
    DataSnowflakeGrantsGrantsTo GrantsTo = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn">FutureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | future_grants_in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo">FutureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | future_grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf">GrantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | grants_of block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn">GrantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | grants_on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo">GrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#id DataSnowflakeGrants#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FutureGrantsIn`<sup>Optional</sup> <a name="FutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsIn FutureGrantsIn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

future_grants_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#future_grants_in DataSnowflakeGrants#future_grants_in}

---

##### `FutureGrantsTo`<sup>Optional</sup> <a name="FutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsTo FutureGrantsTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

future_grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#future_grants_to DataSnowflakeGrants#future_grants_to}

---

##### `GrantsOf`<sup>Optional</sup> <a name="GrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf"></a>

```csharp
public DataSnowflakeGrantsGrantsOf GrantsOf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

grants_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#grants_of DataSnowflakeGrants#grants_of}

---

##### `GrantsOn`<sup>Optional</sup> <a name="GrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn"></a>

```csharp
public DataSnowflakeGrantsGrantsOn GrantsOn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

grants_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#grants_on DataSnowflakeGrants#grants_on}

---

##### `GrantsTo`<sup>Optional</sup> <a name="GrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo"></a>

```csharp
public DataSnowflakeGrantsGrantsTo GrantsTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#grants_to DataSnowflakeGrants#grants_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#id DataSnowflakeGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeGrantsFutureGrantsIn <a name="DataSnowflakeGrantsFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsIn {
    string Database = null,
    DataSnowflakeGrantsFutureGrantsInSchema Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database">Database</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a></code> | schema block. |

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#database DataSnowflakeGrants#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsInSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#schema DataSnowflakeGrants#schema}

---

### DataSnowflakeGrantsFutureGrantsInSchema <a name="DataSnowflakeGrantsFutureGrantsInSchema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsInSchema {
    string SchemaName,
    string DatabaseName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema to list all privileges of new (ie. future) objects granted to. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema.property.databaseName">DatabaseName</a></code> | <code>string</code> | The database in which the scehma resides. Optional when querying a schema in the current database. |

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema to list all privileges of new (ie. future) objects granted to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#schema_name DataSnowflakeGrants#schema_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The database in which the scehma resides. Optional when querying a schema in the current database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#database_name DataSnowflakeGrants#database_name}

---

### DataSnowflakeGrantsFutureGrantsTo <a name="DataSnowflakeGrantsFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsTo {
    string Role
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.role">Role</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the role. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#role DataSnowflakeGrants#role}

---

### DataSnowflakeGrantsGrants <a name="DataSnowflakeGrantsGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrants {

};
```


### DataSnowflakeGrantsGrantsOf <a name="DataSnowflakeGrantsGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsOf {
    string Role = null,
    string Share = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.role">Role</a></code> | <code>string</code> | Lists all users and roles to which the role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share">Share</a></code> | <code>string</code> | Lists all the accounts for the share and indicates the accounts that are using the share. |

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Lists all users and roles to which the role has been granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#role DataSnowflakeGrants#role}

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share"></a>

```csharp
public string Share { get; set; }
```

- *Type:* string

Lists all the accounts for the share and indicates the accounts that are using the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

### DataSnowflakeGrantsGrantsOn <a name="DataSnowflakeGrantsGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsOn {
    object Account = null,
    string ObjectName = null,
    string ObjectType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account">Account</a></code> | <code>object</code> | Object hierarchy to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName">ObjectName</a></code> | <code>string</code> | Name of object to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType">ObjectType</a></code> | <code>string</code> | Type of object to list privileges on. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account"></a>

```csharp
public object Account { get; set; }
```

- *Type:* object

Object hierarchy to list privileges on.

The only valid value is: ACCOUNT. Setting this attribute lists all the account-level (i.e. global) privileges that have been granted to roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#account DataSnowflakeGrants#account}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

Name of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#object_name DataSnowflakeGrants#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Type of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#object_type DataSnowflakeGrants#object_type}

---

### DataSnowflakeGrantsGrantsTo <a name="DataSnowflakeGrantsGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsTo {
    string Role = null,
    string Share = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.role">Role</a></code> | <code>string</code> | Lists all privileges and roles granted to the role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share">Share</a></code> | <code>string</code> | Lists all the privileges granted to the share. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user">User</a></code> | <code>string</code> | Lists all the roles granted to the user. |

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Lists all privileges and roles granted to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#role DataSnowflakeGrants#role}

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share"></a>

```csharp
public string Share { get; set; }
```

- *Type:* string

Lists all the privileges granted to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Lists all the roles granted to the user.

Note that the PUBLIC role, which is automatically available to every user, is not listed

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/data-sources/grants#user DataSnowflakeGrants#user}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeGrantsFutureGrantsInOutputReference <a name="DataSnowflakeGrantsFutureGrantsInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.putSchema"></a>

```csharp
private void PutSchema(DataSnowflakeGrantsFutureGrantsInSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference">DataSnowflakeGrantsFutureGrantsInSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsInSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference">DataSnowflakeGrantsFutureGrantsInSchemaOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsInSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---


### DataSnowflakeGrantsFutureGrantsInSchemaOutputReference <a name="DataSnowflakeGrantsFutureGrantsInSchemaOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsInSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchemaOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsInSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInSchema">DataSnowflakeGrantsFutureGrantsInSchema</a>

---


### DataSnowflakeGrantsFutureGrantsToOutputReference <a name="DataSnowflakeGrantsFutureGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsFutureGrantsToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsFutureGrantsTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---


### DataSnowflakeGrantsGrantsList <a name="DataSnowflakeGrantsGrantsList" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get"></a>

```csharp
private DataSnowflakeGrantsGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeGrantsGrantsOfOutputReference <a name="DataSnowflakeGrantsGrantsOfOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare">ResetShare</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare"></a>

```csharp
private void ResetShare()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput">ShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share">Share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput"></a>

```csharp
public string ShareInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share"></a>

```csharp
public string Share { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsGrantsOf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---


### DataSnowflakeGrantsGrantsOnOutputReference <a name="DataSnowflakeGrantsGrantsOnOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsOnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName"></a>

```csharp
private void ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType"></a>

```csharp
private void ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput">AccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account">Account</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput"></a>

```csharp
public object AccountInput { get; }
```

- *Type:* object

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account"></a>

```csharp
public object Account { get; }
```

- *Type:* object

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsGrantsOn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---


### DataSnowflakeGrantsGrantsOutputReference <a name="DataSnowflakeGrantsGrantsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy">GrantedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn">GrantedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo">GrantedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName">GranteeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption">GrantOption</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `GrantedBy`<sup>Required</sup> <a name="GrantedBy" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy"></a>

```csharp
public string GrantedBy { get; }
```

- *Type:* string

---

##### `GrantedOn`<sup>Required</sup> <a name="GrantedOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn"></a>

```csharp
public string GrantedOn { get; }
```

- *Type:* string

---

##### `GrantedTo`<sup>Required</sup> <a name="GrantedTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo"></a>

```csharp
public string GrantedTo { get; }
```

- *Type:* string

---

##### `GranteeName`<sup>Required</sup> <a name="GranteeName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName"></a>

```csharp
public string GranteeName { get; }
```

- *Type:* string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption"></a>

```csharp
public IResolvable GrantOption { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsGrants InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a>

---


### DataSnowflakeGrantsGrantsToOutputReference <a name="DataSnowflakeGrantsGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeGrantsGrantsToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare"></a>

```csharp
private void ResetShare()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput">ShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share">Share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput"></a>

```csharp
public string ShareInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share"></a>

```csharp
public string Share { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeGrantsGrantsTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---



