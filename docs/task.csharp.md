# `task` Submodule <a name="`task` Submodule" id="@cdktf/provider-snowflake.task"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Task <a name="Task" id="@cdktf/provider-snowflake.task.Task"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task snowflake_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.task.Task.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new Task(Construct Scope, string Id, TaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.task.TaskConfig">TaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.task.TaskConfig">TaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAfter">ResetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution">ResetAllowOverlappingExecution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetErrorIntegration">ResetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSessionParameters">ResetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWarehouse">ResetWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWhen">ResetWhen</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.task.Task.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.task.Task.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.task.Task.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.task.Task.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.task.Task.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.task.Task.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.task.Task.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.task.Task.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.task.Task.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.task.Task.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.task.Task.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.task.Task.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.task.Task.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.task.Task.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAfter` <a name="ResetAfter" id="@cdktf/provider-snowflake.task.Task.resetAfter"></a>

```csharp
private void ResetAfter()
```

##### `ResetAllowOverlappingExecution` <a name="ResetAllowOverlappingExecution" id="@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution"></a>

```csharp
private void ResetAllowOverlappingExecution()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.task.Task.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.task.Task.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetErrorIntegration` <a name="ResetErrorIntegration" id="@cdktf/provider-snowflake.task.Task.resetErrorIntegration"></a>

```csharp
private void ResetErrorIntegration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.task.Task.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-snowflake.task.Task.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSessionParameters` <a name="ResetSessionParameters" id="@cdktf/provider-snowflake.task.Task.resetSessionParameters"></a>

```csharp
private void ResetSessionParameters()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures"></a>

```csharp
private void ResetSuspendTaskAfterNumFailures()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize"></a>

```csharp
private void ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs"></a>

```csharp
private void ResetUserTaskTimeoutMs()
```

##### `ResetWarehouse` <a name="ResetWarehouse" id="@cdktf/provider-snowflake.task.Task.resetWarehouse"></a>

```csharp
private void ResetWarehouse()
```

##### `ResetWhen` <a name="ResetWhen" id="@cdktf/provider-snowflake.task.Task.resetWhen"></a>

```csharp
private void ResetWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.task.Task.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Task.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.task.Task.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.task.Task.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Task.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.task.Task.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.task.Task.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Task.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.task.Task.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

Task.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Task to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Task that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Task to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.afterInput">AfterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput">AllowOverlappingExecutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput">ErrorIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParametersInput">SessionParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatementInput">SqlStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.whenInput">WhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.after">After</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution">AllowOverlappingExecution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParameters">SessionParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatement">SqlStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.when">When</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.task.Task.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.task.Task.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.task.Task.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.task.Task.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.task.Task.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.task.Task.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.task.Task.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.task.Task.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.task.Task.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.task.Task.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.task.Task.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AfterInput`<sup>Optional</sup> <a name="AfterInput" id="@cdktf/provider-snowflake.task.Task.property.afterInput"></a>

```csharp
public string[] AfterInput { get; }
```

- *Type:* string[]

---

##### `AllowOverlappingExecutionInput`<sup>Optional</sup> <a name="AllowOverlappingExecutionInput" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput"></a>

```csharp
public object AllowOverlappingExecutionInput { get; }
```

- *Type:* object

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.task.Task.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.task.Task.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.task.Task.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ErrorIntegrationInput`<sup>Optional</sup> <a name="ErrorIntegrationInput" id="@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput"></a>

```csharp
public string ErrorIntegrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.task.Task.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.task.Task.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-snowflake.task.Task.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.task.Task.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SessionParametersInput`<sup>Optional</sup> <a name="SessionParametersInput" id="@cdktf/provider-snowflake.task.Task.property.sessionParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SessionParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SqlStatementInput`<sup>Optional</sup> <a name="SqlStatementInput" id="@cdktf/provider-snowflake.task.Task.property.sqlStatementInput"></a>

```csharp
public string SqlStatementInput { get; }
```

- *Type:* string

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput"></a>

```csharp
public double SuspendTaskAfterNumFailuresInput { get; }
```

- *Type:* double

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput"></a>

```csharp
public string UserTaskManagedInitialWarehouseSizeInput { get; }
```

- *Type:* string

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput"></a>

```csharp
public double UserTaskTimeoutMsInput { get; }
```

- *Type:* double

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.task.Task.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `WhenInput`<sup>Optional</sup> <a name="WhenInput" id="@cdktf/provider-snowflake.task.Task.property.whenInput"></a>

```csharp
public string WhenInput { get; }
```

- *Type:* string

---

##### `After`<sup>Required</sup> <a name="After" id="@cdktf/provider-snowflake.task.Task.property.after"></a>

```csharp
public string[] After { get; }
```

- *Type:* string[]

---

##### `AllowOverlappingExecution`<sup>Required</sup> <a name="AllowOverlappingExecution" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution"></a>

```csharp
public object AllowOverlappingExecution { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.task.Task.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.task.Task.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.task.Task.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktf/provider-snowflake.task.Task.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.task.Task.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.task.Task.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-snowflake.task.Task.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.task.Task.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SessionParameters`<sup>Required</sup> <a name="SessionParameters" id="@cdktf/provider-snowflake.task.Task.property.sessionParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SessionParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-snowflake.task.Task.property.sqlStatement"></a>

```csharp
public string SqlStatement { get; }
```

- *Type:* string

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures"></a>

```csharp
public double SuspendTaskAfterNumFailures { get; }
```

- *Type:* double

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize"></a>

```csharp
public string UserTaskManagedInitialWarehouseSize { get; }
```

- *Type:* string

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs"></a>

```csharp
public double UserTaskTimeoutMs { get; }
```

- *Type:* double

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.task.Task.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `When`<sup>Required</sup> <a name="When" id="@cdktf/provider-snowflake.task.Task.property.when"></a>

```csharp
public string When { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.task.Task.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaskConfig <a name="TaskConfig" id="@cdktf/provider-snowflake.task.TaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.task.TaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new TaskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string SqlStatement,
    string[] After = null,
    object AllowOverlappingExecution = null,
    string Comment = null,
    object Enabled = null,
    string ErrorIntegration = null,
    string Id = null,
    string Schedule = null,
    System.Collections.Generic.IDictionary<string, string> SessionParameters = null,
    double SuspendTaskAfterNumFailures = null,
    string UserTaskManagedInitialWarehouseSize = null,
    double UserTaskTimeoutMs = null,
    string Warehouse = null,
    string When = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the task; |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement">SqlStatement</a></code> | <code>string</code> | Any single SQL statement, or a call to a stored procedure, executed when the task runs. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.after">After</a></code> | <code>string[]</code> | Specifies one or more predecessor tasks for the current task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution">AllowOverlappingExecution</a></code> | <code>object</code> | By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies if the task should be started (enabled) after creation or should remain suspended (default). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#id Task#id}. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schedule">Schedule</a></code> | <code>string</code> | The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters">SessionParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies session parameters to set for the session when the task runs. A task supports all session parameters. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>double</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>double</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.warehouse">Warehouse</a></code> | <code>string</code> | The warehouse the task will use. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.when">When</a></code> | <code>string</code> | Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.task.TaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.task.TaskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.task.TaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.task.TaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.task.TaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.task.TaskConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#database Task#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.task.TaskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#name Task#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.task.TaskConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#schema Task#schema}

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement"></a>

```csharp
public string SqlStatement { get; set; }
```

- *Type:* string

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#sql_statement Task#sql_statement}

---

##### `After`<sup>Optional</sup> <a name="After" id="@cdktf/provider-snowflake.task.TaskConfig.property.after"></a>

```csharp
public string[] After { get; set; }
```

- *Type:* string[]

Specifies one or more predecessor tasks for the current task.

Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#after Task#after}

---

##### `AllowOverlappingExecution`<sup>Optional</sup> <a name="AllowOverlappingExecution" id="@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution"></a>

```csharp
public object AllowOverlappingExecution { get; set; }
```

- *Type:* object

By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.task.TaskConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#comment Task#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.task.TaskConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#enabled Task#enabled}

---

##### `ErrorIntegration`<sup>Optional</sup> <a name="ErrorIntegration" id="@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; set; }
```

- *Type:* string

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#error_integration Task#error_integration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.task.TaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#id Task#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-snowflake.task.TaskConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#schedule Task#schedule}

---

##### `SessionParameters`<sup>Optional</sup> <a name="SessionParameters" id="@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SessionParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#session_parameters Task#session_parameters}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures"></a>

```csharp
public double SuspendTaskAfterNumFailures { get; set; }
```

- *Type:* double

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize"></a>

```csharp
public string UserTaskManagedInitialWarehouseSize { get; set; }
```

- *Type:* string

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs"></a>

```csharp
public double UserTaskTimeoutMs { get; set; }
```

- *Type:* double

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.task.TaskConfig.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

The warehouse the task will use.

Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#warehouse Task#warehouse}

---

##### `When`<sup>Optional</sup> <a name="When" id="@cdktf/provider-snowflake.task.TaskConfig.property.when"></a>

```csharp
public string When { get; set; }
```

- *Type:* string

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/task#when Task#when}

---



