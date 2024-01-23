# `grantPrivilegesToDatabaseRole` Submodule <a name="`grantPrivilegesToDatabaseRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToDatabaseRole <a name="GrantPrivilegesToDatabaseRole" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role snowflake_grant_privileges_to_database_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRole(Construct Scope, string Id, GrantPrivilegesToDatabaseRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig">GrantPrivilegesToDatabaseRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig">GrantPrivilegesToDatabaseRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema">PutOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject">PutOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAllPrivileges">ResetAllPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApply">ResetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApplyTrigger">ResetAlwaysApplyTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnDatabase">ResetOnDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchema">ResetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchemaObject">ResetOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetPrivileges">ResetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnSchema` <a name="PutOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema"></a>

```csharp
private void PutOnSchema(GrantPrivilegesToDatabaseRoleOnSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

---

##### `PutOnSchemaObject` <a name="PutOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject"></a>

```csharp
private void PutOnSchemaObject(GrantPrivilegesToDatabaseRoleOnSchemaObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

---

##### `ResetAllPrivileges` <a name="ResetAllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAllPrivileges"></a>

```csharp
private void ResetAllPrivileges()
```

##### `ResetAlwaysApply` <a name="ResetAlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApply"></a>

```csharp
private void ResetAlwaysApply()
```

##### `ResetAlwaysApplyTrigger` <a name="ResetAlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApplyTrigger"></a>

```csharp
private void ResetAlwaysApplyTrigger()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnDatabase` <a name="ResetOnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnDatabase"></a>

```csharp
private void ResetOnDatabase()
```

##### `ResetOnSchema` <a name="ResetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchema"></a>

```csharp
private void ResetOnSchema()
```

##### `ResetOnSchemaObject` <a name="ResetOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchemaObject"></a>

```csharp
private void ResetOnSchemaObject()
```

##### `ResetPrivileges` <a name="ResetPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetPrivileges"></a>

```csharp
private void ResetPrivileges()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToDatabaseRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToDatabaseRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToDatabaseRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToDatabaseRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToDatabaseRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GrantPrivilegesToDatabaseRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantPrivilegesToDatabaseRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantPrivilegesToDatabaseRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToDatabaseRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivilegesInput">AllPrivilegesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyInput">AlwaysApplyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTriggerInput">AlwaysApplyTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleNameInput">DatabaseRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabaseInput">OnDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaInput">OnSchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObjectInput">OnSchemaObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivileges">AllPrivileges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTrigger">AlwaysApplyTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleName">DatabaseRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabase">OnDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OnSchema`<sup>Required</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchema"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaOutputReference OnSchema { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaOutputReference</a>

---

##### `OnSchemaObject`<sup>Required</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObject"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference OnSchemaObject { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference</a>

---

##### `AllPrivilegesInput`<sup>Optional</sup> <a name="AllPrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivilegesInput"></a>

```csharp
public object AllPrivilegesInput { get; }
```

- *Type:* object

---

##### `AlwaysApplyInput`<sup>Optional</sup> <a name="AlwaysApplyInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyInput"></a>

```csharp
public object AlwaysApplyInput { get; }
```

- *Type:* object

---

##### `AlwaysApplyTriggerInput`<sup>Optional</sup> <a name="AlwaysApplyTriggerInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTriggerInput"></a>

```csharp
public string AlwaysApplyTriggerInput { get; }
```

- *Type:* string

---

##### `DatabaseRoleNameInput`<sup>Optional</sup> <a name="DatabaseRoleNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleNameInput"></a>

```csharp
public string DatabaseRoleNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnDatabaseInput`<sup>Optional</sup> <a name="OnDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabaseInput"></a>

```csharp
public string OnDatabaseInput { get; }
```

- *Type:* string

---

##### `OnSchemaInput`<sup>Optional</sup> <a name="OnSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaInput"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchema OnSchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

---

##### `OnSchemaObjectInput`<sup>Optional</sup> <a name="OnSchemaObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObjectInput"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObject OnSchemaObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `AllPrivileges`<sup>Required</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivileges"></a>

```csharp
public object AllPrivileges { get; }
```

- *Type:* object

---

##### `AlwaysApply`<sup>Required</sup> <a name="AlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; }
```

- *Type:* object

---

##### `AlwaysApplyTrigger`<sup>Required</sup> <a name="AlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTrigger"></a>

```csharp
public string AlwaysApplyTrigger { get; }
```

- *Type:* string

---

##### `DatabaseRoleName`<sup>Required</sup> <a name="DatabaseRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleName"></a>

```csharp
public string DatabaseRoleName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnDatabase`<sup>Required</sup> <a name="OnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabase"></a>

```csharp
public string OnDatabase { get; }
```

- *Type:* string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToDatabaseRoleConfig <a name="GrantPrivilegesToDatabaseRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseRoleName,
    object AllPrivileges = null,
    object AlwaysApply = null,
    string AlwaysApplyTrigger = null,
    string Id = null,
    string OnDatabase = null,
    GrantPrivilegesToDatabaseRoleOnSchema OnSchema = null,
    GrantPrivilegesToDatabaseRoleOnSchemaObject OnSchemaObject = null,
    string[] Privileges = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.databaseRoleName">DatabaseRoleName</a></code> | <code>string</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.allPrivileges">AllPrivileges</a></code> | <code>object</code> | Grant all privileges on the database role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApplyTrigger">AlwaysApplyTrigger</a></code> | <code>string</code> | This field should not be set and its main purpose is to achieve the functionality described by always_apply field. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onDatabase">OnDatabase</a></code> | <code>string</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.privileges">Privileges</a></code> | <code>string[]</code> | The privileges to grant on the database role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | If specified, allows the recipient role to grant the privileges to other roles. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseRoleName`<sup>Required</sup> <a name="DatabaseRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.databaseRoleName"></a>

```csharp
public string DatabaseRoleName { get; set; }
```

- *Type:* string

The fully qualified name of the database role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#database_role_name GrantPrivilegesToDatabaseRole#database_role_name}

---

##### `AllPrivileges`<sup>Optional</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.allPrivileges"></a>

```csharp
public object AllPrivileges { get; set; }
```

- *Type:* object

Grant all privileges on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#all_privileges GrantPrivilegesToDatabaseRole#all_privileges}

---

##### `AlwaysApply`<sup>Optional</sup> <a name="AlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; set; }
```

- *Type:* object

If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#always_apply GrantPrivilegesToDatabaseRole#always_apply}

---

##### `AlwaysApplyTrigger`<sup>Optional</sup> <a name="AlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApplyTrigger"></a>

```csharp
public string AlwaysApplyTrigger { get; set; }
```

- *Type:* string

This field should not be set and its main purpose is to achieve the functionality described by always_apply field.

This is value will be flipped to the opposite value on every terraform apply, thus creating a new plan that will re-apply grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#always_apply_trigger GrantPrivilegesToDatabaseRole#always_apply_trigger}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnDatabase`<sup>Optional</sup> <a name="OnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onDatabase"></a>

```csharp
public string OnDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#on_database GrantPrivilegesToDatabaseRole#on_database}

---

##### `OnSchema`<sup>Optional</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchema"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchema OnSchema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#on_schema GrantPrivilegesToDatabaseRole#on_schema}

---

##### `OnSchemaObject`<sup>Optional</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchemaObject"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObject OnSchemaObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#on_schema_object GrantPrivilegesToDatabaseRole#on_schema_object}

---

##### `Privileges`<sup>Optional</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

The privileges to grant on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#privileges GrantPrivilegesToDatabaseRole#privileges}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

If specified, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#with_grant_option GrantPrivilegesToDatabaseRole#with_grant_option}

---

### GrantPrivilegesToDatabaseRoleOnSchema <a name="GrantPrivilegesToDatabaseRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchema {
    string AllSchemasInDatabase = null,
    string FutureSchemasInDatabase = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.schemaName">SchemaName</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `AllSchemasInDatabase`<sup>Optional</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.allSchemasInDatabase"></a>

```csharp
public string AllSchemasInDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#all_schemas_in_database GrantPrivilegesToDatabaseRole#all_schemas_in_database}

---

##### `FutureSchemasInDatabase`<sup>Optional</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.futureSchemasInDatabase"></a>

```csharp
public string FutureSchemasInDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#future_schemas_in_database GrantPrivilegesToDatabaseRole#future_schemas_in_database}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#schema_name GrantPrivilegesToDatabaseRole#schema_name}

---

### GrantPrivilegesToDatabaseRoleOnSchemaObject <a name="GrantPrivilegesToDatabaseRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObject {
    GrantPrivilegesToDatabaseRoleOnSchemaObjectAll All = null,
    GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture Future = null,
    string ObjectName = null,
    string ObjectType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectName">ObjectName</a></code> | <code>string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectType">ObjectType</a></code> | <code>string</code> | The object type of the schema object on which privileges will be granted. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.all"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectAll All { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#all GrantPrivilegesToDatabaseRole#all}

---

##### `Future`<sup>Optional</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.future"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture Future { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#future GrantPrivilegesToDatabaseRole#future}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#object_name GrantPrivilegesToDatabaseRole#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW | NETWORK RULE | PACKAGES POLICY | ICEBERG TABLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#object_type GrantPrivilegesToDatabaseRole#object_type}

---

### GrantPrivilegesToDatabaseRoleOnSchemaObjectAll <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObjectAll {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inDatabase">InDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inSchema">InSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}.

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}.

---

### GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inDatabase">InDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inSchema">InSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}.

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectAll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll">PutAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture">PutFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetFuture">ResetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAll` <a name="PutAll" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll"></a>

```csharp
private void PutAll(GrantPrivilegesToDatabaseRoleOnSchemaObjectAll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

---

##### `PutFuture` <a name="PutFuture" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture"></a>

```csharp
private void PutFuture(GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetFuture` <a name="ResetFuture" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetFuture"></a>

```csharp
private void ResetFuture()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```csharp
private void ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```csharp
private void ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.allInput">AllInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.futureInput">FutureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.all"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference All { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference</a>

---

##### `Future`<sup>Required</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.future"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference Future { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.allInput"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectAll AllInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

---

##### `FutureInput`<sup>Optional</sup> <a name="FutureInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture FutureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchemaObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToDatabaseRoleOnSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetAllSchemasInDatabase">ResetAllSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">ResetFutureSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllSchemasInDatabase` <a name="ResetAllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```csharp
private void ResetAllSchemasInDatabase()
```

##### `ResetFutureSchemasInDatabase` <a name="ResetFutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```csharp
private void ResetFutureSchemasInDatabase()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">AllSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">FutureSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllSchemasInDatabaseInput`<sup>Optional</sup> <a name="AllSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```csharp
public string AllSchemasInDatabaseInput { get; }
```

- *Type:* string

---

##### `FutureSchemasInDatabaseInput`<sup>Optional</sup> <a name="FutureSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```csharp
public string FutureSchemasInDatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `AllSchemasInDatabase`<sup>Required</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```csharp
public string AllSchemasInDatabase { get; }
```

- *Type:* string

---

##### `FutureSchemasInDatabase`<sup>Required</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```csharp
public string FutureSchemasInDatabase { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToDatabaseRoleOnSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

---



