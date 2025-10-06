# `oauthIntegrationForPartnerApplications` Submodule <a name="`oauthIntegrationForPartnerApplications` Submodule" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthIntegrationForPartnerApplications <a name="OauthIntegrationForPartnerApplications" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications snowflake_oauth_integration_for_partner_applications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplications(Construct Scope, string Id, OauthIntegrationForPartnerApplicationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig">OauthIntegrationForPartnerApplicationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig">OauthIntegrationForPartnerApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetBlockedRolesList">ResetBlockedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthIssueRefreshTokens">ResetOauthIssueRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthRedirectUri">ResetOauthRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthUseSecondaryRoles">ResetOauthUseSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.putTimeouts"></a>

```csharp
private void PutTimeouts(OauthIntegrationForPartnerApplicationsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a>

---

##### `ResetBlockedRolesList` <a name="ResetBlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetBlockedRolesList"></a>

```csharp
private void ResetBlockedRolesList()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthIssueRefreshTokens` <a name="ResetOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthIssueRefreshTokens"></a>

```csharp
private void ResetOauthIssueRefreshTokens()
```

##### `ResetOauthRedirectUri` <a name="ResetOauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthRedirectUri"></a>

```csharp
private void ResetOauthRedirectUri()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthRefreshTokenValidity"></a>

```csharp
private void ResetOauthRefreshTokenValidity()
```

##### `ResetOauthUseSecondaryRoles` <a name="ResetOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetOauthUseSecondaryRoles"></a>

```csharp
private void ResetOauthUseSecondaryRoles()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OauthIntegrationForPartnerApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

OauthIntegrationForPartnerApplications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

OauthIntegrationForPartnerApplications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

OauthIntegrationForPartnerApplications.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

OauthIntegrationForPartnerApplications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OauthIntegrationForPartnerApplications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OauthIntegrationForPartnerApplications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OauthIntegrationForPartnerApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OauthIntegrationForPartnerApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList">OauthIntegrationForPartnerApplicationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.relatedParameters">RelatedParameters</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList">OauthIntegrationForPartnerApplicationsRelatedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList">OauthIntegrationForPartnerApplicationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference">OauthIntegrationForPartnerApplicationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.blockedRolesListInput">BlockedRolesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.enabledInput">EnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthClientInput">OauthClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthIssueRefreshTokensInput">OauthIssueRefreshTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRedirectUriInput">OauthRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthUseSecondaryRolesInput">OauthUseSecondaryRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.blockedRolesList">BlockedRolesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.enabled">Enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthClient">OauthClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthIssueRefreshTokens">OauthIssueRefreshTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthUseSecondaryRoles">OauthUseSecondaryRoles</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.describeOutput"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList">OauthIntegrationForPartnerApplicationsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `RelatedParameters`<sup>Required</sup> <a name="RelatedParameters" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.relatedParameters"></a>

```csharp
public OauthIntegrationForPartnerApplicationsRelatedParametersList RelatedParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList">OauthIntegrationForPartnerApplicationsRelatedParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.showOutput"></a>

```csharp
public OauthIntegrationForPartnerApplicationsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList">OauthIntegrationForPartnerApplicationsShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.timeouts"></a>

```csharp
public OauthIntegrationForPartnerApplicationsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference">OauthIntegrationForPartnerApplicationsTimeoutsOutputReference</a>

---

##### `BlockedRolesListInput`<sup>Optional</sup> <a name="BlockedRolesListInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.blockedRolesListInput"></a>

```csharp
public string[] BlockedRolesListInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.enabledInput"></a>

```csharp
public string EnabledInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthClientInput`<sup>Optional</sup> <a name="OauthClientInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthClientInput"></a>

```csharp
public string OauthClientInput { get; }
```

- *Type:* string

---

##### `OauthIssueRefreshTokensInput`<sup>Optional</sup> <a name="OauthIssueRefreshTokensInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthIssueRefreshTokensInput"></a>

```csharp
public string OauthIssueRefreshTokensInput { get; }
```

- *Type:* string

---

##### `OauthRedirectUriInput`<sup>Optional</sup> <a name="OauthRedirectUriInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRedirectUriInput"></a>

```csharp
public string OauthRedirectUriInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRefreshTokenValidityInput"></a>

```csharp
public double OauthRefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthUseSecondaryRolesInput`<sup>Optional</sup> <a name="OauthUseSecondaryRolesInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthUseSecondaryRolesInput"></a>

```csharp
public string OauthUseSecondaryRolesInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.timeoutsInput"></a>

```csharp
public IResolvable|OauthIntegrationForPartnerApplicationsTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a>

---

##### `BlockedRolesList`<sup>Required</sup> <a name="BlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.blockedRolesList"></a>

```csharp
public string[] BlockedRolesList { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.enabled"></a>

```csharp
public string Enabled { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthClient`<sup>Required</sup> <a name="OauthClient" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthClient"></a>

```csharp
public string OauthClient { get; }
```

- *Type:* string

---

##### `OauthIssueRefreshTokens`<sup>Required</sup> <a name="OauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthIssueRefreshTokens"></a>

```csharp
public string OauthIssueRefreshTokens { get; }
```

- *Type:* string

---

##### `OauthRedirectUri`<sup>Required</sup> <a name="OauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRedirectUri"></a>

```csharp
public string OauthRedirectUri { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthUseSecondaryRoles`<sup>Required</sup> <a name="OauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.oauthUseSecondaryRoles"></a>

```csharp
public string OauthUseSecondaryRoles { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthIntegrationForPartnerApplicationsConfig <a name="OauthIntegrationForPartnerApplicationsConfig" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string OauthClient,
    string[] BlockedRolesList = null,
    string Comment = null,
    string Enabled = null,
    string Id = null,
    string OauthIssueRefreshTokens = null,
    string OauthRedirectUri = null,
    double OauthRefreshTokenValidity = null,
    string OauthUseSecondaryRoles = null,
    OauthIntegrationForPartnerApplicationsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthClient">OauthClient</a></code> | <code>string</code> | Creates an OAuth interface between Snowflake and a partner application. Valid options are: `LOOKER` \| `TABLEAU_DESKTOP` \| `TABLEAU_SERVER`. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.blockedRolesList">BlockedRolesList</a></code> | <code>string[]</code> | A set of Snowflake roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.enabled">Enabled</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#id OauthIntegrationForPartnerApplications#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthIssueRefreshTokens">OauthIssueRefreshTokens</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>string</code> | Specifies the client URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies how long refresh tokens should be valid (in seconds). |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthUseSecondaryRoles">OauthUseSecondaryRoles</a></code> | <code>string</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#name OauthIntegrationForPartnerApplications#name}

---

##### `OauthClient`<sup>Required</sup> <a name="OauthClient" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthClient"></a>

```csharp
public string OauthClient { get; set; }
```

- *Type:* string

Creates an OAuth interface between Snowflake and a partner application. Valid options are: `LOOKER` | `TABLEAU_DESKTOP` | `TABLEAU_SERVER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#oauth_client OauthIntegrationForPartnerApplications#oauth_client}

---

##### `BlockedRolesList`<sup>Optional</sup> <a name="BlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.blockedRolesList"></a>

```csharp
public string[] BlockedRolesList { get; set; }
```

- *Type:* string[]

A set of Snowflake roles that a user cannot explicitly consent to using after authenticating.

By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#blocked_roles_list OauthIntegrationForPartnerApplications#blocked_roles_list}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#comment OauthIntegrationForPartnerApplications#comment}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.enabled"></a>

```csharp
public string Enabled { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this OAuth integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#enabled OauthIntegrationForPartnerApplications#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#id OauthIntegrationForPartnerApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthIssueRefreshTokens`<sup>Optional</sup> <a name="OauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthIssueRefreshTokens"></a>

```csharp
public string OauthIssueRefreshTokens { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#oauth_issue_refresh_tokens OauthIntegrationForPartnerApplications#oauth_issue_refresh_tokens}

---

##### `OauthRedirectUri`<sup>Optional</sup> <a name="OauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthRedirectUri"></a>

```csharp
public string OauthRedirectUri { get; set; }
```

- *Type:* string

Specifies the client URI.

After a user is authenticated, the web browser is redirected to this URI. The field should be only set when OAUTH_CLIENT = LOOKER. In any other case the field should be left out empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#oauth_redirect_uri OauthIntegrationForPartnerApplications#oauth_redirect_uri}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies how long refresh tokens should be valid (in seconds).

OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#oauth_refresh_token_validity OauthIntegrationForPartnerApplications#oauth_refresh_token_validity}

---

##### `OauthUseSecondaryRoles`<sup>Optional</sup> <a name="OauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.oauthUseSecondaryRoles"></a>

```csharp
public string OauthUseSecondaryRoles { get; set; }
```

- *Type:* string

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Valid options are: `IMPLICIT` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#oauth_use_secondary_roles OauthIntegrationForPartnerApplications#oauth_use_secondary_roles}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsConfig.property.timeouts"></a>

```csharp
public OauthIntegrationForPartnerApplicationsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#timeouts OauthIntegrationForPartnerApplications#timeouts}

---

### OauthIntegrationForPartnerApplicationsDescribeOutput <a name="OauthIntegrationForPartnerApplicationsDescribeOutput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutput {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct <a name="OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputComment <a name="OauthIntegrationForPartnerApplicationsDescribeOutputComment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputComment {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputEnabled <a name="OauthIntegrationForPartnerApplicationsDescribeOutputEnabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputEnabled {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy <a name="OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles {

};
```


### OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct <a name="OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct {

};
```


### OauthIntegrationForPartnerApplicationsRelatedParameters <a name="OauthIntegrationForPartnerApplicationsRelatedParameters" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParameters {

};
```


### OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct <a name="OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct {

};
```


### OauthIntegrationForPartnerApplicationsShowOutput <a name="OauthIntegrationForPartnerApplicationsShowOutput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsShowOutput {

};
```


### OauthIntegrationForPartnerApplicationsTimeouts <a name="OauthIntegrationForPartnerApplicationsTimeouts" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#create OauthIntegrationForPartnerApplications#create}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#delete OauthIntegrationForPartnerApplications#delete}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#read OauthIntegrationForPartnerApplications#read}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#update OauthIntegrationForPartnerApplications#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#create OauthIntegrationForPartnerApplications#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#delete OauthIntegrationForPartnerApplications#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#read OauthIntegrationForPartnerApplications#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/oauth_integration_for_partner_applications#update OauthIntegrationForPartnerApplications#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct">OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct">OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputCommentList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputCommentList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputCommentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputComment">OauthIntegrationForPartnerApplicationsDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputComment">OauthIntegrationForPartnerApplicationsDescribeOutputComment</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabled">OauthIntegrationForPartnerApplicationsDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputEnabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabled">OauthIntegrationForPartnerApplicationsDescribeOutputEnabled</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy">OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy">OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce">OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce">OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens">OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens">OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity">OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity">OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint">OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint">OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles">OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles">OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.blockedRolesList">BlockedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList">OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList">OauthIntegrationForPartnerApplicationsDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList">OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList">OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowedAuthorizationEndpoints">OauthAllowedAuthorizationEndpoints</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowedTokenEndpoints">OauthAllowedTokenEndpoints</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowNonTlsRedirectUri">OauthAllowNonTlsRedirectUri</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientRsaPublicKey2Fp">OauthClientRsaPublicKey2Fp</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientRsaPublicKeyFp">OauthClientRsaPublicKeyFp</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientType">OauthClientType</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthEnforcePkce">OauthEnforcePkce</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthIssueRefreshTokens">OauthIssueRefreshTokens</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthUseSecondaryRoles">OauthUseSecondaryRoles</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.preAuthorizedRolesList">PreAuthorizedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList">OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutput">OauthIntegrationForPartnerApplicationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockedRolesList`<sup>Required</sup> <a name="BlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.blockedRolesList"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList BlockedRolesList { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList">OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.comment"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputCommentList Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputCommentList">OauthIntegrationForPartnerApplicationsDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList Enabled { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList">OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList</a>

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.networkPolicy"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList NetworkPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList">OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList</a>

---

##### `OauthAllowedAuthorizationEndpoints`<sup>Required</sup> <a name="OauthAllowedAuthorizationEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowedAuthorizationEndpoints"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList OauthAllowedAuthorizationEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList</a>

---

##### `OauthAllowedTokenEndpoints`<sup>Required</sup> <a name="OauthAllowedTokenEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowedTokenEndpoints"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList OauthAllowedTokenEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList</a>

---

##### `OauthAllowNonTlsRedirectUri`<sup>Required</sup> <a name="OauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAllowNonTlsRedirectUri"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList OauthAllowNonTlsRedirectUri { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList</a>

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList OauthAuthorizationEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `OauthClientRsaPublicKey2Fp`<sup>Required</sup> <a name="OauthClientRsaPublicKey2Fp" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientRsaPublicKey2Fp"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList OauthClientRsaPublicKey2Fp { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList</a>

---

##### `OauthClientRsaPublicKeyFp`<sup>Required</sup> <a name="OauthClientRsaPublicKeyFp" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientRsaPublicKeyFp"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList OauthClientRsaPublicKeyFp { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList</a>

---

##### `OauthClientType`<sup>Required</sup> <a name="OauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthClientType"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList OauthClientType { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList</a>

---

##### `OauthEnforcePkce`<sup>Required</sup> <a name="OauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthEnforcePkce"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList OauthEnforcePkce { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList</a>

---

##### `OauthIssueRefreshTokens`<sup>Required</sup> <a name="OauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthIssueRefreshTokens"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList OauthIssueRefreshTokens { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList</a>

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList OauthRefreshTokenValidity { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList OauthTokenEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList</a>

---

##### `OauthUseSecondaryRoles`<sup>Required</sup> <a name="OauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.oauthUseSecondaryRoles"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList OauthUseSecondaryRoles { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList">OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList</a>

---

##### `PreAuthorizedRolesList`<sup>Required</sup> <a name="PreAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.preAuthorizedRolesList"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList PreAuthorizedRolesList { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList">OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutput">OauthIntegrationForPartnerApplicationsDescribeOutput</a>

---


### OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList <a name="OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference <a name="OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct">OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct">OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct</a>

---


### OauthIntegrationForPartnerApplicationsRelatedParametersList <a name="OauthIntegrationForPartnerApplicationsRelatedParametersList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList <a name="OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference <a name="OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct">OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct">OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct</a>

---


### OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference <a name="OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.oauthAddPrivilegedRolesToBlockedList">OauthAddPrivilegedRolesToBlockedList</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList">OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParameters">OauthIntegrationForPartnerApplicationsRelatedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="OauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.oauthAddPrivilegedRolesToBlockedList"></a>

```csharp
public OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList OauthAddPrivilegedRolesToBlockedList { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList">OauthIntegrationForPartnerApplicationsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParametersOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsRelatedParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsRelatedParameters">OauthIntegrationForPartnerApplicationsRelatedParameters</a>

---


### OauthIntegrationForPartnerApplicationsShowOutputList <a name="OauthIntegrationForPartnerApplicationsShowOutputList" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.get"></a>

```csharp
private OauthIntegrationForPartnerApplicationsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OauthIntegrationForPartnerApplicationsShowOutputOutputReference <a name="OauthIntegrationForPartnerApplicationsShowOutputOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutput">OauthIntegrationForPartnerApplicationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutputOutputReference.property.internalValue"></a>

```csharp
public OauthIntegrationForPartnerApplicationsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsShowOutput">OauthIntegrationForPartnerApplicationsShowOutput</a>

---


### OauthIntegrationForPartnerApplicationsTimeoutsOutputReference <a name="OauthIntegrationForPartnerApplicationsTimeoutsOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new OauthIntegrationForPartnerApplicationsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OauthIntegrationForPartnerApplicationsTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.oauthIntegrationForPartnerApplications.OauthIntegrationForPartnerApplicationsTimeouts">OauthIntegrationForPartnerApplicationsTimeouts</a>

---



