# `resourceMonitor` Submodule <a name="`resourceMonitor` Submodule" id="@cdktf/provider-snowflake.resourceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitor <a name="ResourceMonitor" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor snowflake_resource_monitor}.

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
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota">ResetCreditQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp">ResetEndTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers">ResetNotifyTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers">ResetNotifyUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp">ResetStartTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger">ResetSuspendImmediateTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger">ResetSuspendTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

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

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

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

##### `ResetStartTimestamp` <a name="ResetStartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp"></a>

```csharp
private void ResetStartTimestamp()
```

##### `ResetSuspendImmediateTrigger` <a name="ResetSuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger"></a>

```csharp
private void ResetSuspendImmediateTrigger()
```

##### `ResetSuspendTrigger` <a name="ResetSuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger"></a>

```csharp
private void ResetSuspendTrigger()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList">ResourceMonitorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference">ResourceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput">CreditQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput">EndTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput">NotifyTriggersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput">NotifyUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput">StartTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput">SuspendImmediateTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput">SuspendTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota">CreditQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp">EndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers">NotifyTriggers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers">NotifyUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp">StartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger">SuspendImmediateTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger">SuspendTrigger</a></code> | <code>double</code> | *No description.* |

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

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.showOutput"></a>

```csharp
public ResourceMonitorShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList">ResourceMonitorShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeouts"></a>

```csharp
public ResourceMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference">ResourceMonitorTimeoutsOutputReference</a>

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

##### `SuspendTriggerInput`<sup>Optional</sup> <a name="SuspendTriggerInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput"></a>

```csharp
public double SuspendTriggerInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

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

##### `SuspendTrigger`<sup>Required</sup> <a name="SuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger"></a>

```csharp
public double SuspendTrigger { get; }
```

- *Type:* double

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
    string StartTimestamp = null,
    double SuspendImmediateTrigger = null,
    double SuspendTrigger = null,
    ResourceMonitorTimeouts Timeouts = null
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
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name">Name</a></code> | <code>string</code> | Identifier for the resource monitor; |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota">CreditQuota</a></code> | <code>double</code> | The number of credits allocated to the resource monitor per frequency interval. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp">EndTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency">Frequency</a></code> | <code>string</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers">NotifyTriggers</a></code> | <code>double[]</code> | Specifies a list of percentages of the credit quota. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers">NotifyUsers</a></code> | <code>string[]</code> | Specifies the list of users (their identifiers) to receive email notifications on resource monitors. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp">StartTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger">SuspendImmediateTrigger</a></code> | <code>double</code> | Represents a numeric value specified as a percentage of the credit quota. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger">SuspendTrigger</a></code> | <code>double</code> | Represents a numeric value specified as a percentage of the credit quota. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a></code> | timeouts block. |

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

Identifier for the resource monitor;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `CreditQuota`<sup>Optional</sup> <a name="CreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota"></a>

```csharp
public double CreditQuota { get; set; }
```

- *Type:* double

The number of credits allocated to the resource monitor per frequency interval.

When total usage for all warehouses assigned to the monitor reaches this number for the current frequency interval, the resource monitor is considered to be at 100% of quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `EndTimestamp`<sup>Optional</sup> <a name="EndTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp"></a>

```csharp
public string EndTimestamp { get; set; }
```

- *Type:* string

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency interval at which the credit usage resets to 0.

Valid values are (case-insensitive): `MONTHLY` | `DAILY` | `WEEKLY` | `YEARLY` | `NEVER`. If you set a `frequency` for a resource monitor, you must also set `start_timestamp`. If you specify `NEVER` for the frequency, the credit usage for the warehouse does not reset. After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyTriggers`<sup>Optional</sup> <a name="NotifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers"></a>

```csharp
public double[] NotifyTriggers { get; set; }
```

- *Type:* double[]

Specifies a list of percentages of the credit quota.

After reaching any of the values the users passed in the notify_users field will be notified (to receive the notification they should have notifications enabled). Values over 100 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `NotifyUsers`<sup>Optional</sup> <a name="NotifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers"></a>

```csharp
public string[] NotifyUsers { get; set; }
```

- *Type:* string[]

Specifies the list of users (their identifiers) to receive email notifications on resource monitors.

For more information about this resource, see [docs](./user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `StartTimestamp`<sup>Optional</sup> <a name="StartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp"></a>

```csharp
public string StartTimestamp { get; set; }
```

- *Type:* string

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

If you set a `start_timestamp` for a resource monitor, you must also set `frequency`.  After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `SuspendImmediateTrigger`<sup>Optional</sup> <a name="SuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger"></a>

```csharp
public double SuspendImmediateTrigger { get; set; }
```

- *Type:* double

Represents a numeric value specified as a percentage of the credit quota.

Values over 100 are supported. After reaching this value, all assigned warehouses immediately cancel any currently running queries or statements. In addition, this action sends a notification to all users who have enabled notifications for themselves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `SuspendTrigger`<sup>Optional</sup> <a name="SuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger"></a>

```csharp
public double SuspendTrigger { get; set; }
```

- *Type:* double

Represents a numeric value specified as a percentage of the credit quota.

Values over 100 are supported. After reaching this value, all assigned warehouses while allowing currently running queries to complete will be suspended. No new queries can be executed by the warehouses until the credit quota for the resource monitor is increased. In addition, this action sends a notification to all users who have enabled notifications for themselves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.timeouts"></a>

```csharp
public ResourceMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#timeouts ResourceMonitor#timeouts}

---

### ResourceMonitorShowOutput <a name="ResourceMonitorShowOutput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorShowOutput {

};
```


### ResourceMonitorTimeouts <a name="ResourceMonitorTimeouts" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#create ResourceMonitor#create}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#delete ResourceMonitor#delete}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#read ResourceMonitor#read}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#update ResourceMonitor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#create ResourceMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#delete ResourceMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#read ResourceMonitor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/resource_monitor#update ResourceMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceMonitorShowOutputList <a name="ResourceMonitorShowOutputList" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get"></a>

```csharp
private ResourceMonitorShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ResourceMonitorShowOutputOutputReference <a name="ResourceMonitorShowOutputOutputReference" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creditQuota">CreditQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.remainingCredits">RemainingCredits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendAt">SuspendAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendImmediateAt">SuspendImmediateAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.usedCredits">UsedCredits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput">ResourceMonitorShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CreditQuota`<sup>Required</sup> <a name="CreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creditQuota"></a>

```csharp
public double CreditQuota { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `RemainingCredits`<sup>Required</sup> <a name="RemainingCredits" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.remainingCredits"></a>

```csharp
public double RemainingCredits { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `SuspendAt`<sup>Required</sup> <a name="SuspendAt" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendAt"></a>

```csharp
public double SuspendAt { get; }
```

- *Type:* double

---

##### `SuspendImmediateAt`<sup>Required</sup> <a name="SuspendImmediateAt" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendImmediateAt"></a>

```csharp
public double SuspendImmediateAt { get; }
```

- *Type:* double

---

##### `UsedCredits`<sup>Required</sup> <a name="UsedCredits" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.usedCredits"></a>

```csharp
public double UsedCredits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.internalValue"></a>

```csharp
public ResourceMonitorShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput">ResourceMonitorShowOutput</a>

---


### ResourceMonitorTimeoutsOutputReference <a name="ResourceMonitorTimeoutsOutputReference" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ResourceMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



