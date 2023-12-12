# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktf/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroup(Construct Scope, string Id, FailoverGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica">PutFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule">PutReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts">ResetAllowedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">ResetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">ResetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">ResetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica">ResetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes">ResetObjectTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">ResetReplicationSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFromReplica` <a name="PutFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica"></a>

```csharp
private void PutFromReplica(FailoverGroupFromReplica Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `PutReplicationSchedule` <a name="PutReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule"></a>

```csharp
private void PutReplicationSchedule(FailoverGroupReplicationSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `ResetAllowedAccounts` <a name="ResetAllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts"></a>

```csharp
private void ResetAllowedAccounts()
```

##### `ResetAllowedDatabases` <a name="ResetAllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```csharp
private void ResetAllowedDatabases()
```

##### `ResetAllowedIntegrationTypes` <a name="ResetAllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```csharp
private void ResetAllowedIntegrationTypes()
```

##### `ResetAllowedShares` <a name="ResetAllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```csharp
private void ResetAllowedShares()
```

##### `ResetFromReplica` <a name="ResetFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica"></a>

```csharp
private void ResetFromReplica()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```csharp
private void ResetIgnoreEditionCheck()
```

##### `ResetObjectTypes` <a name="ResetObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes"></a>

```csharp
private void ResetObjectTypes()
```

##### `ResetReplicationSchedule` <a name="ResetReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```csharp
private void ResetReplicationSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FailoverGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FailoverGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FailoverGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

FailoverGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FailoverGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica">FromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">ReplicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">AllowedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">AllowedDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">AllowedIntegrationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">AllowedSharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput">FromReplicaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">ObjectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">AllowedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">AllowedShares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FromReplica`<sup>Required</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica"></a>

```csharp
public FailoverGroupFromReplicaOutputReference FromReplica { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a>

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```csharp
public FailoverGroupReplicationScheduleOutputReference ReplicationSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a>

---

##### `AllowedAccountsInput`<sup>Optional</sup> <a name="AllowedAccountsInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```csharp
public string[] AllowedAccountsInput { get; }
```

- *Type:* string[]

---

##### `AllowedDatabasesInput`<sup>Optional</sup> <a name="AllowedDatabasesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```csharp
public string[] AllowedDatabasesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypesInput`<sup>Optional</sup> <a name="AllowedIntegrationTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```csharp
public string[] AllowedIntegrationTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedSharesInput`<sup>Optional</sup> <a name="AllowedSharesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```csharp
public string[] AllowedSharesInput { get; }
```

- *Type:* string[]

---

##### `FromReplicaInput`<sup>Optional</sup> <a name="FromReplicaInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput"></a>

```csharp
public FailoverGroupFromReplica FromReplicaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```csharp
public object IgnoreEditionCheckInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectTypesInput`<sup>Optional</sup> <a name="ObjectTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```csharp
public string[] ObjectTypesInput { get; }
```

- *Type:* string[]

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```csharp
public FailoverGroupReplicationSchedule ReplicationScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedDatabases`<sup>Required</sup> <a name="AllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```csharp
public string[] AllowedDatabases { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; }
```

- *Type:* string[]

---

##### `AllowedShares`<sup>Required</sup> <a name="AllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```csharp
public string[] AllowedShares { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```csharp
public object IgnoreEditionCheck { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] AllowedAccounts = null,
    string[] AllowedDatabases = null,
    string[] AllowedIntegrationTypes = null,
    string[] AllowedShares = null,
    FailoverGroupFromReplica FromReplica = null,
    string Id = null,
    object IgnoreEditionCheck = null,
    string[] ObjectTypes = null,
    FailoverGroupReplicationSchedule ReplicationSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">AllowedDatabases</a></code> | <code>string[]</code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">AllowedShares</a></code> | <code>string[]</code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica">FromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>object</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#name FailoverGroup#name}

---

##### `AllowedAccounts`<sup>Optional</sup> <a name="AllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; set; }
```

- *Type:* string[]

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `AllowedDatabases`<sup>Optional</sup> <a name="AllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```csharp
public string[] AllowedDatabases { get; set; }
```

- *Type:* string[]

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `AllowedIntegrationTypes`<sup>Optional</sup> <a name="AllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; set; }
```

- *Type:* string[]

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `AllowedShares`<sup>Optional</sup> <a name="AllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```csharp
public string[] AllowedShares { get; set; }
```

- *Type:* string[]

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `FromReplica`<sup>Optional</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica"></a>

```csharp
public FailoverGroupFromReplica FromReplica { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```csharp
public object IgnoreEditionCheck { get; set; }
```

- *Type:* object

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `ObjectTypes`<sup>Optional</sup> <a name="ObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; set; }
```

- *Type:* string[]

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `ReplicationSchedule`<sup>Optional</sup> <a name="ReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```csharp
public FailoverGroupReplicationSchedule ReplicationSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

### FailoverGroupFromReplica <a name="FailoverGroupFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupFromReplica {
    string Name,
    string OrganizationName,
    string SourceAccountName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name">Name</a></code> | <code>string</code> | Identifier for the primary failover group in the source account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName">OrganizationName</a></code> | <code>string</code> | Name of your Snowflake organization. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName">SourceAccountName</a></code> | <code>string</code> | Source account from which you are enabling replication and failover of the specified objects. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#name FailoverGroup#name}

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

##### `SourceAccountName`<sup>Required</sup> <a name="SourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName"></a>

```csharp
public string SourceAccountName { get; set; }
```

- *Type:* string

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

### FailoverGroupReplicationSchedule <a name="FailoverGroupReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupReplicationSchedule {
    FailoverGroupReplicationScheduleCron Cron = null,
    double Interval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval">Interval</a></code> | <code>double</code> | Specifies the interval in minutes for the replication schedule. |

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron"></a>

```csharp
public FailoverGroupReplicationScheduleCron Cron { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#cron FailoverGroup#cron}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#interval FailoverGroup#interval}

---

### FailoverGroupReplicationScheduleCron <a name="FailoverGroupReplicationScheduleCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupReplicationScheduleCron {
    string Expression,
    string TimeZone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression">Expression</a></code> | <code>string</code> | Specifies the cron expression for the replication schedule. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone">TimeZone</a></code> | <code>string</code> | Specifies the time zone for secondary group refresh. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#expression FailoverGroup#expression}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupFromReplicaOutputReference <a name="FailoverGroupFromReplicaOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupFromReplicaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput">SourceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName">SourceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `SourceAccountNameInput`<sup>Optional</sup> <a name="SourceAccountNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput"></a>

```csharp
public string SourceAccountNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `SourceAccountName`<sup>Required</sup> <a name="SourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName"></a>

```csharp
public string SourceAccountName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue"></a>

```csharp
public FailoverGroupFromReplica InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---


### FailoverGroupReplicationScheduleCronOutputReference <a name="FailoverGroupReplicationScheduleCronOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupReplicationScheduleCronOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue"></a>

```csharp
public FailoverGroupReplicationScheduleCron InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---


### FailoverGroupReplicationScheduleOutputReference <a name="FailoverGroupReplicationScheduleOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new FailoverGroupReplicationScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron">PutCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron">ResetCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCron` <a name="PutCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron"></a>

```csharp
private void PutCron(FailoverGroupReplicationScheduleCron Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `ResetCron` <a name="ResetCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron"></a>

```csharp
private void ResetCron()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput">CronInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron"></a>

```csharp
public FailoverGroupReplicationScheduleCronOutputReference Cron { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput"></a>

```csharp
public FailoverGroupReplicationScheduleCron CronInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue"></a>

```csharp
public FailoverGroupReplicationSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---



