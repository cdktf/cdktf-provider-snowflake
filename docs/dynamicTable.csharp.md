# `dynamicTable` Submodule <a name="`dynamicTable` Submodule" id="@cdktf/provider-snowflake.dynamicTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicTable <a name="DynamicTable" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table snowflake_dynamic_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTable(Construct Scope, string Id, DynamicTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig">DynamicTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig">DynamicTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag">PutTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetInitialize">ResetInitialize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace">ResetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetRefreshMode">ResetRefreshMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetLag` <a name="PutTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag"></a>

```csharp
private void PutTargetLag(DynamicTableTargetLag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts"></a>

```csharp
private void PutTimeouts(DynamicTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialize` <a name="ResetInitialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetInitialize"></a>

```csharp
private void ResetInitialize()
```

##### `ResetOrReplace` <a name="ResetOrReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace"></a>

```csharp
private void ResetOrReplace()
```

##### `ResetRefreshMode` <a name="ResetRefreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetRefreshMode"></a>

```csharp
private void ResetRefreshMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DynamicTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DynamicTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DynamicTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DynamicTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DynamicTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering">AutomaticClustering</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes">Bytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy">ClusterBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp">DataTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone">IsClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica">IsReplica</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn">LastSuspendedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason">RefreshModeReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState">SchedulingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag">TargetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference">DynamicTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initializeInput">InitializeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput">OrReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeInput">RefreshModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput">TargetLagInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initialize">Initialize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace">OrReplace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode">RefreshMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutomaticClustering`<sup>Required</sup> <a name="AutomaticClustering" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering"></a>

```csharp
public IResolvable AutomaticClustering { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes"></a>

```csharp
public double Bytes { get; }
```

- *Type:* double

---

##### `ClusterBy`<sup>Required</sup> <a name="ClusterBy" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy"></a>

```csharp
public string ClusterBy { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DataTimestamp`<sup>Required</sup> <a name="DataTimestamp" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp"></a>

```csharp
public string DataTimestamp { get; }
```

- *Type:* string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `IsClone`<sup>Required</sup> <a name="IsClone" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone"></a>

```csharp
public IResolvable IsClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsReplica`<sup>Required</sup> <a name="IsReplica" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica"></a>

```csharp
public IResolvable IsReplica { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastSuspendedOn`<sup>Required</sup> <a name="LastSuspendedOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn"></a>

```csharp
public string LastSuspendedOn { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `RefreshModeReason`<sup>Required</sup> <a name="RefreshModeReason" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason"></a>

```csharp
public string RefreshModeReason { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `SchedulingState`<sup>Required</sup> <a name="SchedulingState" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState"></a>

```csharp
public string SchedulingState { get; }
```

- *Type:* string

---

##### `TargetLag`<sup>Required</sup> <a name="TargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag"></a>

```csharp
public DynamicTableTargetLagOutputReference TargetLag { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeouts"></a>

```csharp
public DynamicTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference">DynamicTableTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitializeInput`<sup>Optional</sup> <a name="InitializeInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initializeInput"></a>

```csharp
public string InitializeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrReplaceInput`<sup>Optional</sup> <a name="OrReplaceInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput"></a>

```csharp
public object OrReplaceInput { get; }
```

- *Type:* object

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RefreshModeInput`<sup>Optional</sup> <a name="RefreshModeInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeInput"></a>

```csharp
public string RefreshModeInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TargetLagInput`<sup>Optional</sup> <a name="TargetLagInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput"></a>

```csharp
public DynamicTableTargetLag TargetLagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Initialize`<sup>Required</sup> <a name="Initialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initialize"></a>

```csharp
public string Initialize { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrReplace`<sup>Required</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace"></a>

```csharp
public object OrReplace { get; }
```

- *Type:* object

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RefreshMode`<sup>Required</sup> <a name="RefreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode"></a>

```csharp
public string RefreshMode { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicTableConfig <a name="DynamicTableConfig" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Name,
    string Query,
    string Schema,
    DynamicTableTargetLag TargetLag,
    string Warehouse,
    string Comment = null,
    string Id = null,
    string Initialize = null,
    object OrReplace = null,
    string RefreshMode = null,
    DynamicTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query">Query</a></code> | <code>string</code> | Specifies the query to use to populate the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag">TargetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | target_lag block. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse">Warehouse</a></code> | <code>string</code> | The warehouse in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#id DynamicTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.initialize">Initialize</a></code> | <code>string</code> | (Default: `ON_CREATE`) Initialize trigger for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace">OrReplace</a></code> | <code>object</code> | (Default: `false`) Specifies whether to replace the dynamic table if it already exists. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.refreshMode">RefreshMode</a></code> | <code>string</code> | (Default: `AUTO`) INCREMENTAL to use incremental refreshes, FULL to recompute the whole table on every refresh, or AUTO to let Snowflake decide. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#database DynamicTable#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#name DynamicTable#name}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Specifies the query to use to populate the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#query DynamicTable#query}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#schema DynamicTable#schema}

---

##### `TargetLag`<sup>Required</sup> <a name="TargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag"></a>

```csharp
public DynamicTableTargetLag TargetLag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

target_lag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#target_lag DynamicTable#target_lag}

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

The warehouse in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#warehouse DynamicTable#warehouse}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#comment DynamicTable#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#id DynamicTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Initialize`<sup>Optional</sup> <a name="Initialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.initialize"></a>

```csharp
public string Initialize { get; set; }
```

- *Type:* string

(Default: `ON_CREATE`) Initialize trigger for the dynamic table.

Can only be set on creation. Available options are ON_CREATE and ON_SCHEDULE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#initialize DynamicTable#initialize}

---

##### `OrReplace`<sup>Optional</sup> <a name="OrReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace"></a>

```csharp
public object OrReplace { get; set; }
```

- *Type:* object

(Default: `false`) Specifies whether to replace the dynamic table if it already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#or_replace DynamicTable#or_replace}

---

##### `RefreshMode`<sup>Optional</sup> <a name="RefreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.refreshMode"></a>

```csharp
public string RefreshMode { get; set; }
```

- *Type:* string

(Default: `AUTO`) INCREMENTAL to use incremental refreshes, FULL to recompute the whole table on every refresh, or AUTO to let Snowflake decide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#refresh_mode DynamicTable#refresh_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.timeouts"></a>

```csharp
public DynamicTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#timeouts DynamicTable#timeouts}

---

### DynamicTableTargetLag <a name="DynamicTableTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTableTargetLag {
    object Downstream = null,
    string MaximumDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream">Downstream</a></code> | <code>object</code> | Specifies whether the target lag time is downstream. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | Specifies the maximum target lag time for the dynamic table. |

---

##### `Downstream`<sup>Optional</sup> <a name="Downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream"></a>

```csharp
public object Downstream { get; set; }
```

- *Type:* object

Specifies whether the target lag time is downstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#downstream DynamicTable#downstream}

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; set; }
```

- *Type:* string

Specifies the maximum target lag time for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#maximum_duration DynamicTable#maximum_duration}

---

### DynamicTableTimeouts <a name="DynamicTableTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTableTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#create DynamicTable#create}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#delete DynamicTable#delete}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#read DynamicTable#read}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#update DynamicTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#create DynamicTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#delete DynamicTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#read DynamicTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/dynamic_table#update DynamicTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicTableTargetLagOutputReference <a name="DynamicTableTargetLagOutputReference" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTableTargetLagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream">ResetDownstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDownstream` <a name="ResetDownstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream"></a>

```csharp
private void ResetDownstream()
```

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration"></a>

```csharp
private void ResetMaximumDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput">DownstreamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream">Downstream</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownstreamInput`<sup>Optional</sup> <a name="DownstreamInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput"></a>

```csharp
public object DownstreamInput { get; }
```

- *Type:* object

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput"></a>

```csharp
public string MaximumDurationInput { get; }
```

- *Type:* string

---

##### `Downstream`<sup>Required</sup> <a name="Downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream"></a>

```csharp
public object Downstream { get; }
```

- *Type:* object

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue"></a>

```csharp
public DynamicTableTargetLag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---


### DynamicTableTimeoutsOutputReference <a name="DynamicTableTimeoutsOutputReference" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DynamicTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



