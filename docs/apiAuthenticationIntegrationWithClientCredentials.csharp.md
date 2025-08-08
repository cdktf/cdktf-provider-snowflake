# `apiAuthenticationIntegrationWithClientCredentials` Submodule <a name="`apiAuthenticationIntegrationWithClientCredentials` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithClientCredentials <a name="ApiAuthenticationIntegrationWithClientCredentials" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials snowflake_api_authentication_integration_with_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentials(Construct Scope, string Id, ApiAuthenticationIntegrationWithClientCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig">ApiAuthenticationIntegrationWithClientCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig">ApiAuthenticationIntegrationWithClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity">ResetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes">ResetOauthAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod">ResetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint">ResetOauthTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiAuthenticationIntegrationWithClientCredentialsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthAccessTokenValidity` <a name="ResetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity"></a>

```csharp
private void ResetOauthAccessTokenValidity()
```

##### `ResetOauthAllowedScopes` <a name="ResetOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes"></a>

```csharp
private void ResetOauthAllowedScopes()
```

##### `ResetOauthClientAuthMethod` <a name="ResetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod"></a>

```csharp
private void ResetOauthClientAuthMethod()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity"></a>

```csharp
private void ResetOauthRefreshTokenValidity()
```

##### `ResetOauthTokenEndpoint` <a name="ResetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint"></a>

```csharp
private void ResetOauthTokenEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithClientCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithClientCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithClientCredentials.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

ApiAuthenticationIntegrationWithClientCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiAuthenticationIntegrationWithClientCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiAuthenticationIntegrationWithClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference">ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput">OauthAccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput">OauthClientAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput">OauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeouts"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference">ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidityInput`<sup>Optional</sup> <a name="OauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput"></a>

```csharp
public double OauthAccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput"></a>

```csharp
public string[] OauthAllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `OauthClientAuthMethodInput`<sup>Optional</sup> <a name="OauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput"></a>

```csharp
public string OauthClientAuthMethodInput { get; }
```

- *Type:* string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput"></a>

```csharp
public string OauthClientIdInput { get; }
```

- *Type:* string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput"></a>

```csharp
public string OauthClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput"></a>

```csharp
public double OauthRefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthTokenEndpointInput`<sup>Optional</sup> <a name="OauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput"></a>

```csharp
public string OauthTokenEndpointInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; }
```

- *Type:* double

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod"></a>

```csharp
public string OauthClientAuthMethod { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithClientCredentialsConfig <a name="ApiAuthenticationIntegrationWithClientCredentialsConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsConfig {
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
    string OauthClientAuthMethod = null,
    double OauthRefreshTokenValidity = null,
    string OauthTokenEndpoint = null,
    ApiAuthenticationIntegrationWithClientCredentialsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>string</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#enabled ApiAuthenticationIntegrationWithClientCredentials#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#name ApiAuthenticationIntegrationWithClientCredentials#name}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; set; }
```

- *Type:* string

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_id ApiAuthenticationIntegrationWithClientCredentials#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; set; }
```

- *Type:* string

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_secret ApiAuthenticationIntegrationWithClientCredentials#oauth_client_secret}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#comment ApiAuthenticationIntegrationWithClientCredentials#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthAccessTokenValidity`<sup>Optional</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_access_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_access_token_validity}

---

##### `OauthAllowedScopes`<sup>Optional</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; set; }
```

- *Type:* string[]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_allowed_scopes ApiAuthenticationIntegrationWithClientCredentials#oauth_allowed_scopes}

---

##### `OauthClientAuthMethod`<sup>Optional</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod"></a>

```csharp
public string OauthClientAuthMethod { get; set; }
```

- *Type:* string

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_auth_method ApiAuthenticationIntegrationWithClientCredentials#oauth_client_auth_method}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; set; }
```

- *Type:* double

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_refresh_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_refresh_token_validity}

---

##### `OauthTokenEndpoint`<sup>Optional</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; set; }
```

- *Type:* string

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_token_endpoint ApiAuthenticationIntegrationWithClientCredentials#oauth_token_endpoint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.timeouts"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#timeouts ApiAuthenticationIntegrationWithClientCredentials#timeouts}

---

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsShowOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsShowOutput {

};
```


### ApiAuthenticationIntegrationWithClientCredentialsTimeouts <a name="ApiAuthenticationIntegrationWithClientCredentialsTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#create ApiAuthenticationIntegrationWithClientCredentials#create}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#delete ApiAuthenticationIntegrationWithClientCredentials#delete}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#read ApiAuthenticationIntegrationWithClientCredentials#read}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#update ApiAuthenticationIntegrationWithClientCredentials#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#create ApiAuthenticationIntegrationWithClientCredentials#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#delete ApiAuthenticationIntegrationWithClientCredentials#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#read ApiAuthenticationIntegrationWithClientCredentials#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/api_authentication_integration_with_client_credentials#update ApiAuthenticationIntegrationWithClientCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType">AuthType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration">ParentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList AuthType { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList Comment { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList Enabled { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a>

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList OauthAccessTokenValidity { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a>

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList OauthAllowedScopes { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a>

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList OauthAuthorizationEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList OauthClientAuthMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a>

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList OauthGrant { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a>

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList OauthRefreshTokenValidity { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList OauthTokenEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a>

---

##### `ParentIntegration`<sup>Required</sup> <a name="ParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList ParentIntegration { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get"></a>

```csharp
private ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiAuthenticationIntegrationWithClientCredentialsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



