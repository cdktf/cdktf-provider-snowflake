# `tableColumnMaskingPolicyApplication` Submodule <a name="`tableColumnMaskingPolicyApplication` Submodule" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableColumnMaskingPolicyApplication <a name="TableColumnMaskingPolicyApplication" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new TableColumnMaskingPolicyApplication(Construct Scope, string Id, TableColumnMaskingPolicyApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig">TableColumnMaskingPolicyApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig">TableColumnMaskingPolicyApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

TableColumnMaskingPolicyApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

TableColumnMaskingPolicyApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

TableColumnMaskingPolicyApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

TableColumnMaskingPolicyApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TableColumnMaskingPolicyApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TableColumnMaskingPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TableColumnMaskingPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput">MaskingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy">MaskingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table">Table</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyInput`<sup>Optional</sup> <a name="MaskingPolicyInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput"></a>

```csharp
public string MaskingPolicyInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicy`<sup>Required</sup> <a name="MaskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy"></a>

```csharp
public string MaskingPolicy { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableColumnMaskingPolicyApplicationConfig <a name="TableColumnMaskingPolicyApplicationConfig" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new TableColumnMaskingPolicyApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Column,
    string MaskingPolicy,
    string Table,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column">Column</a></code> | <code>string</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy">MaskingPolicy</a></code> | <code>string</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table">Table</a></code> | <code>string</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `MaskingPolicy`<sup>Required</sup> <a name="MaskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy"></a>

```csharp
public string MaskingPolicy { get; set; }
```

- *Type:* string

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



