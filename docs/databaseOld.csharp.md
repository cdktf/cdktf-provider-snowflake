# `databaseOld` Submodule <a name="`databaseOld` Submodule" id="@cdktf/provider-snowflake.databaseOld"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOld <a name="DatabaseOld" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old snowflake_database_old}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DatabaseOld(Construct Scope, string Id, DatabaseOldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig">DatabaseOldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig">DatabaseOldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase">ResetFromDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica">ResetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare">ResetFromShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient">ResetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(DatabaseOldReplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays"></a>

```csharp
private void ResetDataRetentionTimeInDays()
```

##### `ResetFromDatabase` <a name="ResetFromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase"></a>

```csharp
private void ResetFromDatabase()
```

##### `ResetFromReplica` <a name="ResetFromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica"></a>

```csharp
private void ResetFromReplica()
```

##### `ResetFromShare` <a name="ResetFromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare"></a>

```csharp
private void ResetFromShare()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsTransient` <a name="ResetIsTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient"></a>

```csharp
private void ResetIsTransient()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration"></a>

```csharp
private void ResetReplicationConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DatabaseOld.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DatabaseOld.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DatabaseOld.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

DatabaseOld.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOld to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOld that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOld to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput">FromDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput">FromReplicaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput">FromShareInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput">IsTransientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase">FromDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica">FromReplica</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare">FromShare</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient">IsTransient</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration"></a>

```csharp
public DatabaseOldReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput"></a>

```csharp
public double DataRetentionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `FromDatabaseInput`<sup>Optional</sup> <a name="FromDatabaseInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput"></a>

```csharp
public string FromDatabaseInput { get; }
```

- *Type:* string

---

##### `FromReplicaInput`<sup>Optional</sup> <a name="FromReplicaInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput"></a>

```csharp
public string FromReplicaInput { get; }
```

- *Type:* string

---

##### `FromShareInput`<sup>Optional</sup> <a name="FromShareInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FromShareInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsTransientInput`<sup>Optional</sup> <a name="IsTransientInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput"></a>

```csharp
public object IsTransientInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput"></a>

```csharp
public DatabaseOldReplicationConfiguration ReplicationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; }
```

- *Type:* double

---

##### `FromDatabase`<sup>Required</sup> <a name="FromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase"></a>

```csharp
public string FromDatabase { get; }
```

- *Type:* string

---

##### `FromReplica`<sup>Required</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica"></a>

```csharp
public string FromReplica { get; }
```

- *Type:* string

---

##### `FromShare`<sup>Required</sup> <a name="FromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FromShare { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsTransient`<sup>Required</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient"></a>

```csharp
public object IsTransient { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOldConfig <a name="DatabaseOldConfig" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DatabaseOldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Comment = null,
    double DataRetentionTimeInDays = null,
    string FromDatabase = null,
    string FromReplica = null,
    System.Collections.Generic.IDictionary<string, string> FromShare = null,
    string Id = null,
    object IsTransient = null,
    DatabaseOldReplicationConfiguration ReplicationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase">FromDatabase</a></code> | <code>string</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica">FromReplica</a></code> | <code>string</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare">FromShare</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#id DatabaseOld#id}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient">IsTransient</a></code> | <code>object</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#name DatabaseOld#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#comment DatabaseOld#comment}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; set; }
```

- *Type:* double

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database. Default value for this field is set to -1, which is a fallback to use Snowflake default. For more information, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#data_retention_time_in_days DatabaseOld#data_retention_time_in_days}

---

##### `FromDatabase`<sup>Optional</sup> <a name="FromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase"></a>

```csharp
public string FromDatabase { get; set; }
```

- *Type:* string

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#from_database DatabaseOld#from_database}

---

##### `FromReplica`<sup>Optional</sup> <a name="FromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica"></a>

```csharp
public string FromReplica { get; set; }
```

- *Type:* string

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<db_name>"`. An example would be: `"myorg1"."account1"."db1"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#from_replica DatabaseOld#from_replica}

---

##### `FromShare`<sup>Optional</sup> <a name="FromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FromShare { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specify a provider and a share in this map to create a database from a share.

As of version 0.87.0, the provider field is the account locator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#from_share DatabaseOld#from_share}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#id DatabaseOld#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTransient`<sup>Optional</sup> <a name="IsTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient"></a>

```csharp
public object IsTransient { get; set; }
```

- *Type:* object

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#is_transient DatabaseOld#is_transient}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration"></a>

```csharp
public DatabaseOldReplicationConfiguration ReplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#replication_configuration DatabaseOld#replication_configuration}

---

### DatabaseOldReplicationConfiguration <a name="DatabaseOldReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DatabaseOldReplicationConfiguration {
    string[] Accounts,
    object IgnoreEditionCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts">Accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#accounts DatabaseOld#accounts}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}. |

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts"></a>

```csharp
public string[] Accounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#accounts DatabaseOld#accounts}.

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck"></a>

```csharp
public object IgnoreEditionCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOldReplicationConfigurationOutputReference <a name="DatabaseOldReplicationConfigurationOutputReference" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new DatabaseOldReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck"></a>

```csharp
private void ResetIgnoreEditionCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput">AccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts">Accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput"></a>

```csharp
public string[] AccountsInput { get; }
```

- *Type:* string[]

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput"></a>

```csharp
public object IgnoreEditionCheckInput { get; }
```

- *Type:* object

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts"></a>

```csharp
public string[] Accounts { get; }
```

- *Type:* string[]

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck"></a>

```csharp
public object IgnoreEditionCheck { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DatabaseOldReplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---



