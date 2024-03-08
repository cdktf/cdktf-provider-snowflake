# `grantPrivilegesToAccountRole` Submodule <a name="`grantPrivilegesToAccountRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToAccountRole <a name="GrantPrivilegesToAccountRole" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role snowflake_grant_privileges_to_account_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRole(Construct Scope, string Id, GrantPrivilegesToAccountRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig">GrantPrivilegesToAccountRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig">GrantPrivilegesToAccountRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject">PutOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema">PutOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject">PutOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges">ResetAllPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply">ResetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger">ResetAlwaysApplyTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount">ResetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject">ResetOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema">ResetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject">ResetOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges">ResetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption">ResetWithGrantOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnAccountObject` <a name="PutOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject"></a>

```csharp
private void PutOnAccountObject(GrantPrivilegesToAccountRoleOnAccountObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---

##### `PutOnSchema` <a name="PutOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema"></a>

```csharp
private void PutOnSchema(GrantPrivilegesToAccountRoleOnSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---

##### `PutOnSchemaObject` <a name="PutOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject"></a>

```csharp
private void PutOnSchemaObject(GrantPrivilegesToAccountRoleOnSchemaObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---

##### `ResetAllPrivileges` <a name="ResetAllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges"></a>

```csharp
private void ResetAllPrivileges()
```

##### `ResetAlwaysApply` <a name="ResetAlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply"></a>

```csharp
private void ResetAlwaysApply()
```

##### `ResetAlwaysApplyTrigger` <a name="ResetAlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger"></a>

```csharp
private void ResetAlwaysApplyTrigger()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnAccount` <a name="ResetOnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount"></a>

```csharp
private void ResetOnAccount()
```

##### `ResetOnAccountObject` <a name="ResetOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject"></a>

```csharp
private void ResetOnAccountObject()
```

##### `ResetOnSchema` <a name="ResetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema"></a>

```csharp
private void ResetOnSchema()
```

##### `ResetOnSchemaObject` <a name="ResetOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject"></a>

```csharp
private void ResetOnSchemaObject()
```

##### `ResetPrivileges` <a name="ResetPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges"></a>

```csharp
private void ResetPrivileges()
```

##### `ResetWithGrantOption` <a name="ResetWithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption"></a>

```csharp
private void ResetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToAccountRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToAccountRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToAccountRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

GrantPrivilegesToAccountRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantPrivilegesToAccountRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantPrivilegesToAccountRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToAccountRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject">OnAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput">AccountRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput">AllPrivilegesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput">AlwaysApplyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput">AlwaysApplyTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput">OnAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput">OnAccountObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput">OnSchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput">OnSchemaObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput">WithGrantOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName">AccountRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges">AllPrivileges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger">AlwaysApplyTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount">OnAccount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OnAccountObject`<sup>Required</sup> <a name="OnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject"></a>

```csharp
public GrantPrivilegesToAccountRoleOnAccountObjectOutputReference OnAccountObject { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a>

---

##### `OnSchema`<sup>Required</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaOutputReference OnSchema { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a>

---

##### `OnSchemaObject`<sup>Required</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference OnSchemaObject { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a>

---

##### `AccountRoleNameInput`<sup>Optional</sup> <a name="AccountRoleNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput"></a>

```csharp
public string AccountRoleNameInput { get; }
```

- *Type:* string

---

##### `AllPrivilegesInput`<sup>Optional</sup> <a name="AllPrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput"></a>

```csharp
public object AllPrivilegesInput { get; }
```

- *Type:* object

---

##### `AlwaysApplyInput`<sup>Optional</sup> <a name="AlwaysApplyInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput"></a>

```csharp
public object AlwaysApplyInput { get; }
```

- *Type:* object

---

##### `AlwaysApplyTriggerInput`<sup>Optional</sup> <a name="AlwaysApplyTriggerInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput"></a>

```csharp
public string AlwaysApplyTriggerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnAccountInput`<sup>Optional</sup> <a name="OnAccountInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput"></a>

```csharp
public object OnAccountInput { get; }
```

- *Type:* object

---

##### `OnAccountObjectInput`<sup>Optional</sup> <a name="OnAccountObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput"></a>

```csharp
public GrantPrivilegesToAccountRoleOnAccountObject OnAccountObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---

##### `OnSchemaInput`<sup>Optional</sup> <a name="OnSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchema OnSchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---

##### `OnSchemaObjectInput`<sup>Optional</sup> <a name="OnSchemaObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObject OnSchemaObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `WithGrantOptionInput`<sup>Optional</sup> <a name="WithGrantOptionInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput"></a>

```csharp
public object WithGrantOptionInput { get; }
```

- *Type:* object

---

##### `AccountRoleName`<sup>Required</sup> <a name="AccountRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName"></a>

```csharp
public string AccountRoleName { get; }
```

- *Type:* string

---

##### `AllPrivileges`<sup>Required</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges"></a>

```csharp
public object AllPrivileges { get; }
```

- *Type:* object

---

##### `AlwaysApply`<sup>Required</sup> <a name="AlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; }
```

- *Type:* object

---

##### `AlwaysApplyTrigger`<sup>Required</sup> <a name="AlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger"></a>

```csharp
public string AlwaysApplyTrigger { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnAccount`<sup>Required</sup> <a name="OnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount"></a>

```csharp
public object OnAccount { get; }
```

- *Type:* object

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `WithGrantOption`<sup>Required</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToAccountRoleConfig <a name="GrantPrivilegesToAccountRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountRoleName,
    object AllPrivileges = null,
    object AlwaysApply = null,
    string AlwaysApplyTrigger = null,
    string Id = null,
    object OnAccount = null,
    GrantPrivilegesToAccountRoleOnAccountObject OnAccountObject = null,
    GrantPrivilegesToAccountRoleOnSchema OnSchema = null,
    GrantPrivilegesToAccountRoleOnSchemaObject OnSchemaObject = null,
    string[] Privileges = null,
    object WithGrantOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName">AccountRoleName</a></code> | <code>string</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges">AllPrivileges</a></code> | <code>object</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply">AlwaysApply</a></code> | <code>object</code> | If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger">AlwaysApplyTrigger</a></code> | <code>string</code> | This is a helper field and should not be set. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount">OnAccount</a></code> | <code>object</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject">OnAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema">OnSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject">OnSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges">Privileges</a></code> | <code>string[]</code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption">WithGrantOption</a></code> | <code>object</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountRoleName`<sup>Required</sup> <a name="AccountRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName"></a>

```csharp
public string AccountRoleName { get; set; }
```

- *Type:* string

The fully qualified name of the account role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#account_role_name GrantPrivilegesToAccountRole#account_role_name}

---

##### `AllPrivileges`<sup>Optional</sup> <a name="AllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges"></a>

```csharp
public object AllPrivileges { get; set; }
```

- *Type:* object

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#all_privileges GrantPrivilegesToAccountRole#all_privileges}

---

##### `AlwaysApply`<sup>Optional</sup> <a name="AlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply"></a>

```csharp
public object AlwaysApply { get; set; }
```

- *Type:* object

If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#always_apply GrantPrivilegesToAccountRole#always_apply}

---

##### `AlwaysApplyTrigger`<sup>Optional</sup> <a name="AlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger"></a>

```csharp
public string AlwaysApplyTrigger { get; set; }
```

- *Type:* string

This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#always_apply_trigger GrantPrivilegesToAccountRole#always_apply_trigger}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAccount`<sup>Optional</sup> <a name="OnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount"></a>

```csharp
public object OnAccount { get; set; }
```

- *Type:* object

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#on_account GrantPrivilegesToAccountRole#on_account}

---

##### `OnAccountObject`<sup>Optional</sup> <a name="OnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject"></a>

```csharp
public GrantPrivilegesToAccountRoleOnAccountObject OnAccountObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#on_account_object GrantPrivilegesToAccountRole#on_account_object}

---

##### `OnSchema`<sup>Optional</sup> <a name="OnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchema OnSchema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#on_schema GrantPrivilegesToAccountRole#on_schema}

---

##### `OnSchemaObject`<sup>Optional</sup> <a name="OnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObject OnSchemaObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#on_schema_object GrantPrivilegesToAccountRole#on_schema_object}

---

##### `Privileges`<sup>Optional</sup> <a name="Privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#privileges GrantPrivilegesToAccountRole#privileges}

---

##### `WithGrantOption`<sup>Optional</sup> <a name="WithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption"></a>

```csharp
public object WithGrantOption { get; set; }
```

- *Type:* object

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#with_grant_option GrantPrivilegesToAccountRole#with_grant_option}

---

### GrantPrivilegesToAccountRoleOnAccountObject <a name="GrantPrivilegesToAccountRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnAccountObject {
    string ObjectName,
    string ObjectType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName">ObjectName</a></code> | <code>string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType">ObjectType</a></code> | <code>string</code> | The object type of the account object on which privileges will be granted. |

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | COMPUTE POOL | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP | EXTERNAL VOLUME

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchema <a name="GrantPrivilegesToAccountRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchema {
    string AllSchemasInDatabase = null,
    string FutureSchemasInDatabase = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>string</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName">SchemaName</a></code> | <code>string</code> | The fully qualified name of the schema. |

---

##### `AllSchemasInDatabase`<sup>Optional</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase"></a>

```csharp
public string AllSchemasInDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#all_schemas_in_database GrantPrivilegesToAccountRole#all_schemas_in_database}

---

##### `FutureSchemasInDatabase`<sup>Optional</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase"></a>

```csharp
public string FutureSchemasInDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#future_schemas_in_database GrantPrivilegesToAccountRole#future_schemas_in_database}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#schema_name GrantPrivilegesToAccountRole#schema_name}

---

### GrantPrivilegesToAccountRoleOnSchemaObject <a name="GrantPrivilegesToAccountRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObject {
    GrantPrivilegesToAccountRoleOnSchemaObjectAll All = null,
    GrantPrivilegesToAccountRoleOnSchemaObjectFuture Future = null,
    string ObjectName = null,
    string ObjectType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName">ObjectName</a></code> | <code>string</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType">ObjectType</a></code> | <code>string</code> | The object type of the schema object on which privileges will be granted. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectAll All { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#all GrantPrivilegesToAccountRole#all}

---

##### `Future`<sup>Optional</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture Future { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#future GrantPrivilegesToAccountRole#future}

---

##### `ObjectName`<sup>Optional</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW | NETWORK RULE | PACKAGES POLICY | ICEBERG TABLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchemaObjectAll <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObjectAll {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase">InDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema">InSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

### GrantPrivilegesToAccountRoleOnSchemaObjectFuture <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObjectFuture {
    string ObjectTypePlural,
    string InDatabase = null,
    string InSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase">InDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema">InSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; set; }
```

- *Type:* string

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `InDatabase`<sup>Optional</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase"></a>

```csharp
public string InDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `InSchema`<sup>Optional</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema"></a>

```csharp
public string InSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToAccountRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnAccountObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToAccountRoleOnAccountObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectAll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase">ResetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema">ResetInSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInDatabase` <a name="ResetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```csharp
private void ResetInDatabase()
```

##### `ResetInSchema` <a name="ResetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```csharp
private void ResetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">InDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">InSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">ObjectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase">InDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema">InSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">ObjectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InDatabaseInput`<sup>Optional</sup> <a name="InDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```csharp
public string InDatabaseInput { get; }
```

- *Type:* string

---

##### `InSchemaInput`<sup>Optional</sup> <a name="InSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```csharp
public string InSchemaInput { get; }
```

- *Type:* string

---

##### `ObjectTypePluralInput`<sup>Optional</sup> <a name="ObjectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```csharp
public string ObjectTypePluralInput { get; }
```

- *Type:* string

---

##### `InDatabase`<sup>Required</sup> <a name="InDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```csharp
public string InDatabase { get; }
```

- *Type:* string

---

##### `InSchema`<sup>Required</sup> <a name="InSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```csharp
public string InSchema { get; }
```

- *Type:* string

---

##### `ObjectTypePlural`<sup>Required</sup> <a name="ObjectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```csharp
public string ObjectTypePlural { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll">PutAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture">PutFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture">ResetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName">ResetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType">ResetObjectType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAll` <a name="PutAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll"></a>

```csharp
private void PutAll(GrantPrivilegesToAccountRoleOnSchemaObjectAll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---

##### `PutFuture` <a name="PutFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture"></a>

```csharp
private void PutFuture(GrantPrivilegesToAccountRoleOnSchemaObjectFuture Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetFuture` <a name="ResetFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture"></a>

```csharp
private void ResetFuture()
```

##### `ResetObjectName` <a name="ResetObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```csharp
private void ResetObjectName()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```csharp
private void ResetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all">All</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future">Future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput">AllInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput">FutureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference All { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a>

---

##### `Future`<sup>Required</sup> <a name="Future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference Future { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a>

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectAll AllInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---

##### `FutureInput`<sup>Optional</sup> <a name="FutureInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture FutureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchemaObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new GrantPrivilegesToAccountRoleOnSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase">ResetAllSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">ResetFutureSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllSchemasInDatabase` <a name="ResetAllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```csharp
private void ResetAllSchemasInDatabase()
```

##### `ResetFutureSchemasInDatabase` <a name="ResetFutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```csharp
private void ResetFutureSchemasInDatabase()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">AllSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">FutureSchemasInDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase">AllSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase">FutureSchemasInDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllSchemasInDatabaseInput`<sup>Optional</sup> <a name="AllSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```csharp
public string AllSchemasInDatabaseInput { get; }
```

- *Type:* string

---

##### `FutureSchemasInDatabaseInput`<sup>Optional</sup> <a name="FutureSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```csharp
public string FutureSchemasInDatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `AllSchemasInDatabase`<sup>Required</sup> <a name="AllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```csharp
public string AllSchemasInDatabase { get; }
```

- *Type:* string

---

##### `FutureSchemasInDatabase`<sup>Required</sup> <a name="FutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```csharp
public string FutureSchemasInDatabase { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue"></a>

```csharp
public GrantPrivilegesToAccountRoleOnSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---



