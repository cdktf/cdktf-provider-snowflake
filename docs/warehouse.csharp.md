# `warehouse` Submodule <a name="`warehouse` Submodule" id="@cdktf/provider-snowflake.warehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Warehouse <a name="Warehouse" id="@cdktf/provider-snowflake.warehouse.Warehouse"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse snowflake_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Warehouse(Construct Scope, string Id, WarehouseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume">ResetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend">ResetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration">ResetEnableQueryAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended">ResetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount">ResetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel">ResetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount">ResetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor">ResetQueryAccelerationMaxScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor">ResetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds">ResetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds">ResetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning">ResetWaitForProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize">ResetWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType">ResetWarehouseType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.warehouse.Warehouse.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.warehouse.Warehouse.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoResume` <a name="ResetAutoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume"></a>

```csharp
private void ResetAutoResume()
```

##### `ResetAutoSuspend` <a name="ResetAutoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend"></a>

```csharp
private void ResetAutoSuspend()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnableQueryAcceleration` <a name="ResetEnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration"></a>

```csharp
private void ResetEnableQueryAcceleration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitiallySuspended` <a name="ResetInitiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended"></a>

```csharp
private void ResetInitiallySuspended()
```

##### `ResetMaxClusterCount` <a name="ResetMaxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount"></a>

```csharp
private void ResetMaxClusterCount()
```

##### `ResetMaxConcurrencyLevel` <a name="ResetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel"></a>

```csharp
private void ResetMaxConcurrencyLevel()
```

##### `ResetMinClusterCount` <a name="ResetMinClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount"></a>

```csharp
private void ResetMinClusterCount()
```

##### `ResetQueryAccelerationMaxScaleFactor` <a name="ResetQueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor"></a>

```csharp
private void ResetQueryAccelerationMaxScaleFactor()
```

##### `ResetResourceMonitor` <a name="ResetResourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor"></a>

```csharp
private void ResetResourceMonitor()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy"></a>

```csharp
private void ResetScalingPolicy()
```

##### `ResetStatementQueuedTimeoutInSeconds` <a name="ResetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds"></a>

```csharp
private void ResetStatementQueuedTimeoutInSeconds()
```

##### `ResetStatementTimeoutInSeconds` <a name="ResetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds"></a>

```csharp
private void ResetStatementTimeoutInSeconds()
```

##### `ResetWaitForProvisioning` <a name="ResetWaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning"></a>

```csharp
private void ResetWaitForProvisioning()
```

##### `ResetWarehouseSize` <a name="ResetWarehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize"></a>

```csharp
private void ResetWarehouseSize()
```

##### `ResetWarehouseType` <a name="ResetWarehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType"></a>

```csharp
private void ResetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Warehouse resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Warehouse.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Warehouse.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Warehouse.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Warehouse.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Warehouse resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Warehouse to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Warehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Warehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput">AutoResumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput">AutoSuspendInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput">EnableQueryAccelerationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput">InitiallySuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput">MaxClusterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput">MaxConcurrencyLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput">MinClusterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput">QueryAccelerationMaxScaleFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput">ResourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput">StatementQueuedTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput">StatementTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput">WaitForProvisioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput">WarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume">AutoResume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend">AutoSuspend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended">InitiallySuspended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount">MaxClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount">MinClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy">ScalingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning">WaitForProvisioning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize">WarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType">WarehouseType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoResumeInput`<sup>Optional</sup> <a name="AutoResumeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput"></a>

```csharp
public object AutoResumeInput { get; }
```

- *Type:* object

---

##### `AutoSuspendInput`<sup>Optional</sup> <a name="AutoSuspendInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput"></a>

```csharp
public double AutoSuspendInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnableQueryAccelerationInput`<sup>Optional</sup> <a name="EnableQueryAccelerationInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput"></a>

```csharp
public object EnableQueryAccelerationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitiallySuspendedInput`<sup>Optional</sup> <a name="InitiallySuspendedInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput"></a>

```csharp
public object InitiallySuspendedInput { get; }
```

- *Type:* object

---

##### `MaxClusterCountInput`<sup>Optional</sup> <a name="MaxClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput"></a>

```csharp
public double MaxClusterCountInput { get; }
```

- *Type:* double

---

##### `MaxConcurrencyLevelInput`<sup>Optional</sup> <a name="MaxConcurrencyLevelInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput"></a>

```csharp
public double MaxConcurrencyLevelInput { get; }
```

- *Type:* double

---

##### `MinClusterCountInput`<sup>Optional</sup> <a name="MinClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput"></a>

```csharp
public double MinClusterCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryAccelerationMaxScaleFactorInput`<sup>Optional</sup> <a name="QueryAccelerationMaxScaleFactorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput"></a>

```csharp
public double QueryAccelerationMaxScaleFactorInput { get; }
```

- *Type:* double

---

##### `ResourceMonitorInput`<sup>Optional</sup> <a name="ResourceMonitorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput"></a>

```csharp
public string ResourceMonitorInput { get; }
```

- *Type:* string

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput"></a>

```csharp
public string ScalingPolicyInput { get; }
```

- *Type:* string

---

##### `StatementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput"></a>

```csharp
public double StatementQueuedTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput"></a>

```csharp
public double StatementTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `WaitForProvisioningInput`<sup>Optional</sup> <a name="WaitForProvisioningInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput"></a>

```csharp
public object WaitForProvisioningInput { get; }
```

- *Type:* object

---

##### `WarehouseSizeInput`<sup>Optional</sup> <a name="WarehouseSizeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput"></a>

```csharp
public string WarehouseSizeInput { get; }
```

- *Type:* string

---

##### `WarehouseTypeInput`<sup>Optional</sup> <a name="WarehouseTypeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput"></a>

```csharp
public string WarehouseTypeInput { get; }
```

- *Type:* string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume"></a>

```csharp
public object AutoResume { get; }
```

- *Type:* object

---

##### `AutoSuspend`<sup>Required</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend"></a>

```csharp
public double AutoSuspend { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `EnableQueryAcceleration`<sup>Required</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration"></a>

```csharp
public object EnableQueryAcceleration { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended"></a>

```csharp
public object InitiallySuspended { get; }
```

- *Type:* object

---

##### `MaxClusterCount`<sup>Required</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount"></a>

```csharp
public double MaxClusterCount { get; }
```

- *Type:* double

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; }
```

- *Type:* double

---

##### `MinClusterCount`<sup>Required</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount"></a>

```csharp
public double MinClusterCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryAccelerationMaxScaleFactor`<sup>Required</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor"></a>

```csharp
public double QueryAccelerationMaxScaleFactor { get; }
```

- *Type:* double

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; }
```

- *Type:* string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy"></a>

```csharp
public string ScalingPolicy { get; }
```

- *Type:* string

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `WaitForProvisioning`<sup>Required</sup> <a name="WaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning"></a>

```csharp
public object WaitForProvisioning { get; }
```

- *Type:* object

---

##### `WarehouseSize`<sup>Required</sup> <a name="WarehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize"></a>

```csharp
public string WarehouseSize { get; }
```

- *Type:* string

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType"></a>

```csharp
public string WarehouseType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseConfig <a name="WarehouseConfig" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new WarehouseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AutoResume = null,
    double AutoSuspend = null,
    string Comment = null,
    object EnableQueryAcceleration = null,
    string Id = null,
    object InitiallySuspended = null,
    double MaxClusterCount = null,
    double MaxConcurrencyLevel = null,
    double MinClusterCount = null,
    double QueryAccelerationMaxScaleFactor = null,
    string ResourceMonitor = null,
    string ScalingPolicy = null,
    double StatementQueuedTimeoutInSeconds = null,
    double StatementTimeoutInSeconds = null,
    object WaitForProvisioning = null,
    string WarehouseSize = null,
    string WarehouseType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name">Name</a></code> | <code>string</code> | Identifier for the virtual warehouse; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume">AutoResume</a></code> | <code>object</code> | Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend">AutoSuspend</a></code> | <code>double</code> | Specifies the number of seconds of inactivity after which a warehouse is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#comment Warehouse#comment}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration">EnableQueryAcceleration</a></code> | <code>object</code> | Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#id Warehouse#id}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended">InitiallySuspended</a></code> | <code>object</code> | Specifies whether the warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount">MaxClusterCount</a></code> | <code>double</code> | Specifies the maximum number of server clusters for the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount">MinClusterCount</a></code> | <code>double</code> | Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor">QueryAccelerationMaxScaleFactor</a></code> | <code>double</code> | Specifies the maximum scale factor for leasing compute resources for query acceleration. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | Specifies the name of a resource monitor that is explicitly assigned to the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy">ScalingPolicy</a></code> | <code>string</code> | Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning">WaitForProvisioning</a></code> | <code>object</code> | Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize">WarehouseSize</a></code> | <code>string</code> | Specifies the size of the virtual warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType">WarehouseType</a></code> | <code>string</code> | Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier for the virtual warehouse; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#name Warehouse#name}

---

##### `AutoResume`<sup>Optional</sup> <a name="AutoResume" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume"></a>

```csharp
public object AutoResume { get; set; }
```

- *Type:* object

Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#auto_resume Warehouse#auto_resume}

---

##### `AutoSuspend`<sup>Optional</sup> <a name="AutoSuspend" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend"></a>

```csharp
public double AutoSuspend { get; set; }
```

- *Type:* double

Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#auto_suspend Warehouse#auto_suspend}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#comment Warehouse#comment}.

---

##### `EnableQueryAcceleration`<sup>Optional</sup> <a name="EnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration"></a>

```csharp
public object EnableQueryAcceleration { get; set; }
```

- *Type:* object

Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#enable_query_acceleration Warehouse#enable_query_acceleration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#id Warehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitiallySuspended`<sup>Optional</sup> <a name="InitiallySuspended" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended"></a>

```csharp
public object InitiallySuspended { get; set; }
```

- *Type:* object

Specifies whether the warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#initially_suspended Warehouse#initially_suspended}

---

##### `MaxClusterCount`<sup>Optional</sup> <a name="MaxClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount"></a>

```csharp
public double MaxClusterCount { get; set; }
```

- *Type:* double

Specifies the maximum number of server clusters for the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#max_cluster_count Warehouse#max_cluster_count}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; set; }
```

- *Type:* double

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#max_concurrency_level Warehouse#max_concurrency_level}

---

##### `MinClusterCount`<sup>Optional</sup> <a name="MinClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount"></a>

```csharp
public double MinClusterCount { get; set; }
```

- *Type:* double

Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#min_cluster_count Warehouse#min_cluster_count}

---

##### `QueryAccelerationMaxScaleFactor`<sup>Optional</sup> <a name="QueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor"></a>

```csharp
public double QueryAccelerationMaxScaleFactor { get; set; }
```

- *Type:* double

Specifies the maximum scale factor for leasing compute resources for query acceleration.

The scale factor is used as a multiplier based on warehouse size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#query_acceleration_max_scale_factor Warehouse#query_acceleration_max_scale_factor}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; set; }
```

- *Type:* string

Specifies the name of a resource monitor that is explicitly assigned to the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#resource_monitor Warehouse#resource_monitor}

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy"></a>

```csharp
public string ScalingPolicy { get; set; }
```

- *Type:* string

Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#scaling_policy Warehouse#scaling_policy}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; set; }
```

- *Type:* double

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; set; }
```

- *Type:* double

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}

---

##### `WaitForProvisioning`<sup>Optional</sup> <a name="WaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning"></a>

```csharp
public object WaitForProvisioning { get; set; }
```

- *Type:* object

Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#wait_for_provisioning Warehouse#wait_for_provisioning}

---

##### `WarehouseSize`<sup>Optional</sup> <a name="WarehouseSize" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize"></a>

```csharp
public string WarehouseSize { get; set; }
```

- *Type:* string

Specifies the size of the virtual warehouse.

Larger warehouse sizes 5X-Large and 6X-Large are currently in preview and only available on Amazon Web Services (AWS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#warehouse_size Warehouse#warehouse_size}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType"></a>

```csharp
public string WarehouseType { get; set; }
```

- *Type:* string

Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#warehouse_type Warehouse#warehouse_type}

---



