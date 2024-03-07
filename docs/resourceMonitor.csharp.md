# `resourceMonitor` Submodule <a name="`resourceMonitor` Submodule" id="@cdktf/provider-snowflake.resourceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitor <a name="ResourceMonitor" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor snowflake_resource_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitor(Construct Scope, string Id, ResourceMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota">ResetCreditQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp">ResetEndTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers">ResetNotifyTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers">ResetNotifyUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount">ResetSetForAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp">ResetStartTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger">ResetSuspendImmediateTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers">ResetSuspendImmediateTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger">ResetSuspendTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers">ResetSuspendTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses">ResetWarehouses</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreditQuota` <a name="ResetCreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota"></a>

```csharp
private void ResetCreditQuota()
```

##### `ResetEndTimestamp` <a name="ResetEndTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp"></a>

```csharp
private void ResetEndTimestamp()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifyTriggers` <a name="ResetNotifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers"></a>

```csharp
private void ResetNotifyTriggers()
```

##### `ResetNotifyUsers` <a name="ResetNotifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers"></a>

```csharp
private void ResetNotifyUsers()
```

##### `ResetSetForAccount` <a name="ResetSetForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount"></a>

```csharp
private void ResetSetForAccount()
```

##### `ResetStartTimestamp` <a name="ResetStartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp"></a>

```csharp
private void ResetStartTimestamp()
```

##### `ResetSuspendImmediateTrigger` <a name="ResetSuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger"></a>

```csharp
private void ResetSuspendImmediateTrigger()
```

##### `ResetSuspendImmediateTriggers` <a name="ResetSuspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers"></a>

```csharp
private void ResetSuspendImmediateTriggers()
```

##### `ResetSuspendTrigger` <a name="ResetSuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger"></a>

```csharp
private void ResetSuspendTrigger()
```

##### `ResetSuspendTriggers` <a name="ResetSuspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers"></a>

```csharp
private void ResetSuspendTriggers()
```

##### `ResetWarehouses` <a name="ResetWarehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses"></a>

```csharp
private void ResetWarehouses()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ResourceMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ResourceMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ResourceMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ResourceMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResourceMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResourceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput">CreditQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput">EndTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput">NotifyTriggersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput">NotifyUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput">SetForAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput">StartTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput">SuspendImmediateTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput">SuspendImmediateTriggersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput">SuspendTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput">SuspendTriggersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput">WarehousesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota">CreditQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp">EndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers">NotifyTriggers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers">NotifyUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount">SetForAccount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp">StartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger">SuspendImmediateTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers">SuspendImmediateTriggers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger">SuspendTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers">SuspendTriggers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses">Warehouses</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreditQuotaInput`<sup>Optional</sup> <a name="CreditQuotaInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput"></a>

```csharp
public double CreditQuotaInput { get; }
```

- *Type:* double

---

##### `EndTimestampInput`<sup>Optional</sup> <a name="EndTimestampInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput"></a>

```csharp
public string EndTimestampInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotifyTriggersInput`<sup>Optional</sup> <a name="NotifyTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput"></a>

```csharp
public double[] NotifyTriggersInput { get; }
```

- *Type:* double[]

---

##### `NotifyUsersInput`<sup>Optional</sup> <a name="NotifyUsersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput"></a>

```csharp
public string[] NotifyUsersInput { get; }
```

- *Type:* string[]

---

##### `SetForAccountInput`<sup>Optional</sup> <a name="SetForAccountInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput"></a>

```csharp
public object SetForAccountInput { get; }
```

- *Type:* object

---

##### `StartTimestampInput`<sup>Optional</sup> <a name="StartTimestampInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput"></a>

```csharp
public string StartTimestampInput { get; }
```

- *Type:* string

---

##### `SuspendImmediateTriggerInput`<sup>Optional</sup> <a name="SuspendImmediateTriggerInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput"></a>

```csharp
public double SuspendImmediateTriggerInput { get; }
```

- *Type:* double

---

##### `SuspendImmediateTriggersInput`<sup>Optional</sup> <a name="SuspendImmediateTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput"></a>

```csharp
public double[] SuspendImmediateTriggersInput { get; }
```

- *Type:* double[]

---

##### `SuspendTriggerInput`<sup>Optional</sup> <a name="SuspendTriggerInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput"></a>

```csharp
public double SuspendTriggerInput { get; }
```

- *Type:* double

---

##### `SuspendTriggersInput`<sup>Optional</sup> <a name="SuspendTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput"></a>

```csharp
public double[] SuspendTriggersInput { get; }
```

- *Type:* double[]

---

##### `WarehousesInput`<sup>Optional</sup> <a name="WarehousesInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput"></a>

```csharp
public string[] WarehousesInput { get; }
```

- *Type:* string[]

---

##### `CreditQuota`<sup>Required</sup> <a name="CreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota"></a>

```csharp
public double CreditQuota { get; }
```

- *Type:* double

---

##### `EndTimestamp`<sup>Required</sup> <a name="EndTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp"></a>

```csharp
public string EndTimestamp { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotifyTriggers`<sup>Required</sup> <a name="NotifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers"></a>

```csharp
public double[] NotifyTriggers { get; }
```

- *Type:* double[]

---

##### `NotifyUsers`<sup>Required</sup> <a name="NotifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers"></a>

```csharp
public string[] NotifyUsers { get; }
```

- *Type:* string[]

---

##### `SetForAccount`<sup>Required</sup> <a name="SetForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount"></a>

```csharp
public object SetForAccount { get; }
```

- *Type:* object

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp"></a>

```csharp
public string StartTimestamp { get; }
```

- *Type:* string

---

##### `SuspendImmediateTrigger`<sup>Required</sup> <a name="SuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger"></a>

```csharp
public double SuspendImmediateTrigger { get; }
```

- *Type:* double

---

##### `SuspendImmediateTriggers`<sup>Required</sup> <a name="SuspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers"></a>

```csharp
public double[] SuspendImmediateTriggers { get; }
```

- *Type:* double[]

---

##### `SuspendTrigger`<sup>Required</sup> <a name="SuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger"></a>

```csharp
public double SuspendTrigger { get; }
```

- *Type:* double

---

##### `SuspendTriggers`<sup>Required</sup> <a name="SuspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers"></a>

```csharp
public double[] SuspendTriggers { get; }
```

- *Type:* double[]

---

##### `Warehouses`<sup>Required</sup> <a name="Warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses"></a>

```csharp
public string[] Warehouses { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorConfig <a name="ResourceMonitorConfig" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double CreditQuota = null,
    string EndTimestamp = null,
    string Frequency = null,
    string Id = null,
    double[] NotifyTriggers = null,
    string[] NotifyUsers = null,
    object SetForAccount = null,
    string StartTimestamp = null,
    double SuspendImmediateTrigger = null,
    double[] SuspendImmediateTriggers = null,
    double SuspendTrigger = null,
    double[] SuspendTriggers = null,
    string[] Warehouses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name">Name</a></code> | <code>string</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota">CreditQuota</a></code> | <code>double</code> | The number of credits allocated monthly to the resource monitor. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp">EndTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency">Frequency</a></code> | <code>string</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers">NotifyTriggers</a></code> | <code>double[]</code> | A list of percentage thresholds at which to send an alert to subscribed users. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers">NotifyUsers</a></code> | <code>string[]</code> | Specifies the list of users to receive email notifications on resource monitors. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount">SetForAccount</a></code> | <code>object</code> | Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false). |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp">StartTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger">SuspendImmediateTrigger</a></code> | <code>double</code> | The number that represents the percentage threshold at which to immediately suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers">SuspendImmediateTriggers</a></code> | <code>double[]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger">SuspendTrigger</a></code> | <code>double</code> | The number that represents the percentage threshold at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers">SuspendTriggers</a></code> | <code>double[]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses">Warehouses</a></code> | <code>string[]</code> | A list of warehouses to apply the resource monitor to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `CreditQuota`<sup>Optional</sup> <a name="CreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota"></a>

```csharp
public double CreditQuota { get; set; }
```

- *Type:* double

The number of credits allocated monthly to the resource monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `EndTimestamp`<sup>Optional</sup> <a name="EndTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp"></a>

```csharp
public string EndTimestamp { get; set; }
```

- *Type:* string

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency interval at which the credit usage resets to 0.

If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyTriggers`<sup>Optional</sup> <a name="NotifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers"></a>

```csharp
public double[] NotifyTriggers { get; set; }
```

- *Type:* double[]

A list of percentage thresholds at which to send an alert to subscribed users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `NotifyUsers`<sup>Optional</sup> <a name="NotifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers"></a>

```csharp
public string[] NotifyUsers { get; set; }
```

- *Type:* string[]

Specifies the list of users to receive email notifications on resource monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `SetForAccount`<sup>Optional</sup> <a name="SetForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount"></a>

```csharp
public object SetForAccount { get; set; }
```

- *Type:* object

Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#set_for_account ResourceMonitor#set_for_account}

---

##### `StartTimestamp`<sup>Optional</sup> <a name="StartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp"></a>

```csharp
public string StartTimestamp { get; set; }
```

- *Type:* string

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `SuspendImmediateTrigger`<sup>Optional</sup> <a name="SuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger"></a>

```csharp
public double SuspendImmediateTrigger { get; set; }
```

- *Type:* double

The number that represents the percentage threshold at which to immediately suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `SuspendImmediateTriggers`<sup>Optional</sup> <a name="SuspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers"></a>

```csharp
public double[] SuspendImmediateTriggers { get; set; }
```

- *Type:* double[]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}

---

##### `SuspendTrigger`<sup>Optional</sup> <a name="SuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger"></a>

```csharp
public double SuspendTrigger { get; set; }
```

- *Type:* double

The number that represents the percentage threshold at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `SuspendTriggers`<sup>Optional</sup> <a name="SuspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers"></a>

```csharp
public double[] SuspendTriggers { get; set; }
```

- *Type:* double[]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#suspend_triggers ResourceMonitor#suspend_triggers}

---

##### `Warehouses`<sup>Optional</sup> <a name="Warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses"></a>

```csharp
public string[] Warehouses { get; set; }
```

- *Type:* string[]

A list of warehouses to apply the resource monitor to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/resource_monitor#warehouses ResourceMonitor#warehouses}

---



