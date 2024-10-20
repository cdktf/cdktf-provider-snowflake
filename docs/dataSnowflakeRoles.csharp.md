# `dataSnowflakeRoles` Submodule <a name="`dataSnowflakeRoles` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeRoles <a name="DataSnowflakeRoles" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles snowflake_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRoles(Construct Scope, string Id, DataSnowflakeRolesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig">DataSnowflakeRolesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig">DataSnowflakeRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetInClass">ResetInClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetLike">ResetLike</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInClass` <a name="ResetInClass" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetInClass"></a>

```csharp
private void ResetInClass()
```

##### `ResetLike` <a name="ResetLike" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.resetLike"></a>

```csharp
private void ResetLike()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRoles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRoles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRoles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DataSnowflakeRoles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSnowflakeRoles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeRoles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList">DataSnowflakeRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.inClassInput">InClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.inClass">InClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.like">Like</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.roles"></a>

```csharp
public DataSnowflakeRolesRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList">DataSnowflakeRolesRolesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InClassInput`<sup>Optional</sup> <a name="InClassInput" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.inClassInput"></a>

```csharp
public string InClassInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InClass`<sup>Required</sup> <a name="InClass" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.inClass"></a>

```csharp
public string InClass { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRoles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeRolesConfig <a name="DataSnowflakeRolesConfig" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string InClass = null,
    string Like = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles#id DataSnowflakeRoles#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.inClass">InClass</a></code> | <code>string</code> | Filters the SHOW GRANTS output by class name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles#id DataSnowflakeRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InClass`<sup>Optional</sup> <a name="InClass" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.inClass"></a>

```csharp
public string InClass { get; set; }
```

- *Type:* string

Filters the SHOW GRANTS output by class name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles#in_class DataSnowflakeRoles#in_class}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/roles#like DataSnowflakeRoles#like}

---

### DataSnowflakeRolesRoles <a name="DataSnowflakeRolesRoles" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRoles {

};
```


### DataSnowflakeRolesRolesShowOutput <a name="DataSnowflakeRolesRolesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRolesShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeRolesRolesList <a name="DataSnowflakeRolesRolesList" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.get"></a>

```csharp
private DataSnowflakeRolesRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRolesRolesOutputReference <a name="DataSnowflakeRolesRolesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList">DataSnowflakeRolesRolesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRoles">DataSnowflakeRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeRolesRolesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList">DataSnowflakeRolesRolesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRolesRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRoles">DataSnowflakeRolesRoles</a>

---


### DataSnowflakeRolesRolesShowOutputList <a name="DataSnowflakeRolesRolesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRolesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.get"></a>

```csharp
private DataSnowflakeRolesRolesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeRolesRolesShowOutputOutputReference <a name="DataSnowflakeRolesRolesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DataSnowflakeRolesRolesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.assignedToUsers">AssignedToUsers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.grantedRoles">GrantedRoles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.grantedToRoles">GrantedToRoles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isCurrent">IsCurrent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isInherited">IsInherited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutput">DataSnowflakeRolesRolesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignedToUsers`<sup>Required</sup> <a name="AssignedToUsers" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.assignedToUsers"></a>

```csharp
public double AssignedToUsers { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `GrantedRoles`<sup>Required</sup> <a name="GrantedRoles" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.grantedRoles"></a>

```csharp
public double GrantedRoles { get; }
```

- *Type:* double

---

##### `GrantedToRoles`<sup>Required</sup> <a name="GrantedToRoles" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.grantedToRoles"></a>

```csharp
public double GrantedToRoles { get; }
```

- *Type:* double

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isCurrent"></a>

```csharp
public IResolvable IsCurrent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsInherited`<sup>Required</sup> <a name="IsInherited" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.isInherited"></a>

```csharp
public IResolvable IsInherited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeRolesRolesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRoles.DataSnowflakeRolesRolesShowOutput">DataSnowflakeRolesRolesShowOutput</a>

---



