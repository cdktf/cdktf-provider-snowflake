# `apiAuthenticationIntegrationWithAuthorizationCodeGrant` Submodule <a name="`apiAuthenticationIntegrationWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrant <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant snowflake_api_authentication_integration_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrant(Construct Scope, string Id, ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig">ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig">ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAccessTokenValidity">ResetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAllowedScopes">ResetOauthAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAuthorizationEndpoint">ResetOauthAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthClientAuthMethod">ResetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthTokenEndpoint">ResetOauthTokenEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthAccessTokenValidity` <a name="ResetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAccessTokenValidity"></a>

```csharp
private void ResetOauthAccessTokenValidity()
```

##### `ResetOauthAllowedScopes` <a name="ResetOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAllowedScopes"></a>

```csharp
private void ResetOauthAllowedScopes()
```

##### `ResetOauthAuthorizationEndpoint` <a name="ResetOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAuthorizationEndpoint"></a>

```csharp
private void ResetOauthAuthorizationEndpoint()
```

##### `ResetOauthClientAuthMethod` <a name="ResetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthClientAuthMethod"></a>

```csharp
private void ResetOauthClientAuthMethod()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthRefreshTokenValidity"></a>

```csharp
private void ResetOauthRefreshTokenValidity()
```

##### `ResetOauthTokenEndpoint` <a name="ResetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthTokenEndpoint"></a>

```csharp
private void ResetOauthTokenEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithAuthorizationCodeGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithAuthorizationCodeGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithAuthorizationCodeGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithAuthorizationCodeGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiAuthenticationIntegrationWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidityInput">OauthAccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpointInput">OauthAuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethodInput">OauthClientAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpointInput">OauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.describeOutput"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.showOutput"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidityInput`<sup>Optional</sup> <a name="OauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidityInput"></a>

```csharp
public double OauthAccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopesInput"></a>

```csharp
public string[] OauthAllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `OauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="OauthAuthorizationEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpointInput"></a>

```csharp
public string OauthAuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `OauthClientAuthMethodInput`<sup>Optional</sup> <a name="OauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethodInput"></a>

```csharp
public string OauthClientAuthMethodInput { get; }
```

- *Type:* string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientIdInput"></a>

```csharp
public string OauthClientIdInput { get; }
```

- *Type:* string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecretInput"></a>

```csharp
public string OauthClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidityInput"></a>

```csharp
public double OauthRefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthTokenEndpointInput`<sup>Optional</sup> <a name="OauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpointInput"></a>

```csharp
public string OauthTokenEndpointInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; }
```

- *Type:* double

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethod"></a>

```csharp
public string OauthClientAuthMethod { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Name,
    string OauthClientId,
    string OauthClientSecret,
    string Comment = null,
    string Id = null,
    double OauthAccessTokenValidity = null,
    string[] OauthAllowedScopes = null,
    string OauthAuthorizationEndpoint = null,
    string OauthClientAuthMethod = null,
    double OauthRefreshTokenValidity = null,
    string OauthTokenEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | Specifies the URL for authenticating to the external service. If removed from the config, the resource is recreated. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>string</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#enabled ApiAuthenticationIntegrationWithAuthorizationCodeGrant#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#name ApiAuthenticationIntegrationWithAuthorizationCodeGrant#name}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; set; }
```

- *Type:* string

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; set; }
```

- *Type:* string

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_secret ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_secret}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#comment ApiAuthenticationIntegrationWithAuthorizationCodeGrant#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthAccessTokenValidity`<sup>Optional</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; set; }
```

- *Type:* double

Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_access_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_access_token_validity}

---

##### `OauthAllowedScopes`<sup>Optional</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; set; }
```

- *Type:* string[]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_allowed_scopes ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_allowed_scopes}

---

##### `OauthAuthorizationEndpoint`<sup>Optional</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; set; }
```

- *Type:* string

Specifies the URL for authenticating to the external service. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_authorization_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_authorization_endpoint}

---

##### `OauthClientAuthMethod`<sup>Optional</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientAuthMethod"></a>

```csharp
public string OauthClientAuthMethod { get; set; }
```

- *Type:* string

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_auth_method ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_auth_method}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; set; }
```

- *Type:* double

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_refresh_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_refresh_token_validity}

---

##### `OauthTokenEndpoint`<sup>Optional</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; set; }
```

- *Type:* string

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_token_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_token_endpoint}

---

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration {

};
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientId</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.authType">AuthType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.parentIntegration">ParentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.authType"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList AuthType { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.enabled"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList Enabled { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList</a>

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList OauthAccessTokenValidity { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList</a>

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList OauthAllowedScopes { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList</a>

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList OauthAuthorizationEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList OauthClientAuthMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList</a>

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientId"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList OauthClientId { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientIdList</a>

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthGrant"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList OauthGrant { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList</a>

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList OauthRefreshTokenValidity { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList OauthTokenEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList</a>

---

##### `ParentIntegration`<sup>Required</sup> <a name="ParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.parentIntegration"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList ParentIntegration { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput</a>

---



